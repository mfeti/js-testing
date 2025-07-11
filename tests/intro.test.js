import { describe, it, expect } from "vitest";
import { max, fizzBuzz } from "../src/intro.js";

describe("max", () => {
  it("should return the maximum of two numbers", () => {
    expect(max(1, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return 'Fizz' for multiples of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return 'Buzz' for multiples of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return 'FizzBuzz' for multiples of both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return the number as a string for other numbers", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});
