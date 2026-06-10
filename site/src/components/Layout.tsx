import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { MdDarkMode, MdEmail, MdLightMode } from "react-icons/md";
import { SiGithub, SiGooglescholar } from "react-icons/si";

type Theme = "light" | "dark";

// localStorage can be unavailable (opaque origins, privacy modes).
function storedTheme(): Theme | null {
  try {
    const theme = localStorage.getItem("theme");
    return theme === "light" || theme === "dark" ? theme : null;
  } catch {
    return null;
  }
}

function persistTheme(theme: Theme | null) {
  try {
    if (theme) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  } catch {
    // Theme still applies for the session via the data attribute.
  }
}

function systemTheme(): Theme {
  return typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Layout() {
  const [theme, setTheme] = useState<Theme | null>(storedTheme);
  const effectiveTheme = theme ?? systemTheme();

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
    persistTheme(theme);
  }, [theme]);

  return (
    <div className="page">
      <header className="site-header">
        <NavLink to="/" className="site-title">
          Hao Xiang Li
        </NavLink>
        <nav className="site-nav">
          <NavLink to="/" end>
            About
          </NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${effectiveTheme === "dark" ? "light" : "dark"} mode`}
            onClick={() =>
              setTheme(effectiveTheme === "dark" ? "light" : "dark")
            }
          >
            {effectiveTheme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <a href="mailto:mark.haoxiang@gmail.com">
          <MdEmail />
          Email
        </a>
        <a
          href="https://github.com/MarkHaoxiang"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub />
          GitHub
        </a>
        <a
          href="https://scholar.google.com/citations?hl=en&user=C5UBf5QAAAAJ"
          target="_blank"
          rel="noreferrer"
        >
          <SiGooglescholar />
          Scholar
        </a>
        <a
          href="https://www.linkedin.com/in/hao-xiang-li"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
