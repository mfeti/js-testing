import { describe, it, expect } from "vitest";
import { max, fizzBuzz } from "../src/intro.js";

describe("max", () => {
  it("should return the maximum of two numbers", () => {
    expect(max(1, 2)).toBe(2);
  });
});
