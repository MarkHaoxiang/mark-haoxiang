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

  it("has unique titles (used as list keys)", () => {
    const titles = publications.map((pub) => pub.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("only contains http(s) links", () => {
    for (const pub of publications) {
      for (const url of Object.values(pub.links ?? {})) {
        expect(url).toMatch(/^https?:\/\//);
      }
    }
  });
});
