import { describe, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverages } from "../src/intro.js";

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

describe("calculateAverages", () => {
  it("should return the average of an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(calculateAverages(numbers)).toBe(3);
  });

  it("should return NaN for an empty array", () => {
    const numbers = [];
    expect(calculateAverages(numbers)).toBeNaN();
  });

  it("should handle negative numbers", () => {
    const numbers = [-1, -2, -3, -4, -5];
    expect(calculateAverages(numbers)).toBe(-3);
  });

  it("should handle mixed positive and negative numbers", () => {
    const numbers = [-1, 0, 1, 2, 3];
    expect(calculateAverages(numbers)).toBe(1);
  });

  it("should handle floating point numbers", () => {
    const numbers = [1.5, 2.5, 3.5];
    expect(calculateAverages(numbers)).toBe(2.5);
  });

  it("should handle large numbers", () => {
    const numbers = [1000000, 2000000, 3000000];
    expect(calculateAverages(numbers)).toBe(2000000);
  });

  it("should handle small numbers", () => {
    const numbers = [0.0001, 0.0002, 0.0003];
    expect(calculateAverages(numbers)).toBe(0.0002);
  });
});
