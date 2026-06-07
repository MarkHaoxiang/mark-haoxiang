import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

afterEach(cleanup);

describe("routes", () => {
  it("renders the about page at /", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: "About" })).toBeTruthy();
  });

  it("renders the publications page", () => {
    renderAt("/publications");
    expect(screen.getByRole("heading", { name: "Publications" })).toBeTruthy();
  });

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
    expect(screen.getByRole("heading", { name: "Page not found" })).toBeTruthy();
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
