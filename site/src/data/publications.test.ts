import { describe, expect, it } from "vitest";
import { publications } from "./publications";

describe("publications data", () => {
  it("has non-empty required fields", () => {
    for (const pub of publications) {
      expect(pub.title.trim()).not.toBe("");
      expect(pub.authors.trim()).not.toBe("");
      expect(pub.venue.trim()).not.toBe("");
    }
  });

  it("has plausible years", () => {
    for (const pub of publications) {
      expect(pub.year).toBeGreaterThanOrEqual(2020);
      expect(pub.year).toBeLessThanOrEqual(new Date().getFullYear() + 1);
    }
  });

  it("has unique kebab-case slugs (used as list keys and routes)", () => {
    const slugs = publications.map((pub) => pub.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("only contains http(s) links", () => {
    for (const pub of publications) {
      for (const url of Object.values(pub.links ?? {})) {
        expect(url).toMatch(/^https?:\/\//);
      }
    }
  });
});
