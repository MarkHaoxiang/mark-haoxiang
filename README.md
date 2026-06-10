# mark-haoxiang

Personal website and server hosting for [markhaoxiang.com](https://markhaoxiang.com).

- `site/` — the personal site: React + Vite + TypeScript single-page app, served as static files.
- `infra/` — Caddy reverse proxy + docker-compose. This is the entrypoint for everything hosted on the domain; other projects (e.g. [catan-engine](https://github.com/MarkHaoxiang/catan-engine)) join as additional compose services behind path routes.

## Server bootstrap

Prerequisites: Node.js (>= 20), Docker with the compose plugin, DNS A/AAAA records for `markhaoxiang.com` and `www.markhaoxiang.com` pointing at the server.

```bash
git clone https://github.com/MarkHaoxiang/mark-haoxiang.git
cd mark-haoxiang

# 1. Build the site
cd site
npm ci
npm run build

# 2. Configure the domain
cd ../infra
echo 'SITE_ADDRESS=markhaoxiang.com, www.markhaoxiang.com' > .env

# 3. Serve (Caddy provisions HTTPS automatically)
docker compose up -d
```

Redeploying after a site change: `cd site && npm run build` — the built `dist/` is bind-mounted into the Caddy container, so no restart is needed.

## Local development

```bash
cd site
npm ci
npm run dev          # Vite dev server on http://localhost:5173
```

To test the production setup locally, build the site and run compose without a `.env`; Caddy falls back to plain HTTP on [http://localhost:8080](http://localhost:8080).

## Testing

```bash
cd site
npm test             # vitest (route smoke tests, data validation)
npm run lint         # eslint
npm run smoke        # production build into a throwaway dir (never touches dist/)
npm run check        # typecheck + lint + tests + build smoke
```

A pre-commit hook (`.githooks/pre-commit`) runs `npm run check` when `site/` files are staged, and `caddy validate` when `infra/` files are staged (skipped if caddy isn't installed). It is enabled by `git config core.hooksPath .githooks`, which the site's npm `prepare` script sets automatically on install.

## Adding a hosted project

Projects live in their own repositories and are mounted under a path on the domain:

1. Add a service to `infra/docker-compose.yml` (see the commented `catan` stub).
2. Add a `handle_path /<name>/*` block to `infra/Caddyfile` proxying to that service.
3. Build the project with a matching base path (for catan-render: Vite `base: "/catan/"` and FastAPI `root_path="/catan"`), since `handle_path` strips the prefix before proxying.
4. Add a project page to `site/src/pages/projects/` and link it from `site/src/pages/Projects.tsx`.
