import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="page">
      <header className="site-header">
        <NavLink to="/" className="site-title">
          Mark Haoxiang
        </NavLink>
        <nav className="site-nav">
          <NavLink to="/" end>
            About
          </NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <a href="mailto:mark.haoxiang@gmail.com">Email</a>
        <a
          href="https://github.com/MarkHaoxiang"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://scholar.google.com/citations?user=TODO"
          target="_blank"
          rel="noreferrer"
        >
          Scholar
        </a>
      </footer>
    </div>
  );
}
