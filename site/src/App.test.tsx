import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";
import { publications } from "./data/publications";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

afterEach(cleanup);

describe("routes", () => {
  it("renders the overview at /", () => {
    renderAt("/");
    expect(screen.getByText("Currently at Jane Street.")).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "publications" }).getAttribute("href"),
    ).toBe("/publications");
  });

  it("lists every publication with a link to its page", () => {
    renderAt("/publications");
    expect(screen.getByRole("heading", { name: "Publications" })).toBeTruthy();
    for (const pub of publications) {
      expect(
        screen.getByRole("link", { name: pub.title }).getAttribute("href"),
      ).toBe(`/publications/${pub.slug}`);
    }
  });

  it.each(publications.map((pub) => [pub.slug, pub.title] as const))(
    "renders a page for publication %s",
    (slug, title) => {
      renderAt(`/publications/${slug}`);
      expect(screen.getByRole("heading", { name: title })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Abstract" })).toBeTruthy();
      expect(
        screen
          .getByRole("link", { name: "← Publications" })
          .getAttribute("href"),
      ).toBe("/publications");
    },
  );

  it("renders the projects index with a link to each project page", () => {
    renderAt("/projects");
    expect(screen.getByRole("heading", { name: "Projects" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Catan Engine" }).getAttribute("href"),
    ).toBe("/projects/catan-engine");
  });

  it("renders the catan-engine project page with demo and repo links", () => {
    renderAt("/projects/catan-engine");
    expect(
      screen.getByRole("link", { name: "Live demo" }).getAttribute("href"),
    ).toBe("/catan");
    expect(
      screen
        .getByRole("link", { name: "Source on GitHub" })
        .getAttribute("href"),
    ).toBe("https://github.com/MarkHaoxiang/catan-engine");
  });

  it("falls back to the not-found page on unknown routes", () => {
    renderAt("/does-not-exist");
    expect(
      screen.getByRole("heading", { name: "Page not found" }),
    ).toBeTruthy();
  });
});

describe("layout", () => {
  it("shows navigation on every page", () => {
    renderAt("/");
    const nav = screen.getByRole("navigation");
    expect(nav.textContent).toContain("About");
    expect(nav.textContent).toContain("Publications");
    expect(nav.textContent).toContain("Projects");
  });
});
