import { describe, expect, test, it } from "vitest";
import { add, subtract, multiply, divide } from "./mathOperations";

describe("math operations", () => {
  test.skip("addition", {tags: ["frontend"]}, () => {
    expect(1 + 1).toBe(2);
  });

  it.skip("subtraction", {tags: ["frontend"]}, () => {
    expect(5 - 2).toBe(3);
  });

  test.skip("consolelog", {tags: ["frontend"]}, () => {
    console.log("Hello, World!");
  });

  test("should add two numbers correctly", {tags: ["frontend"]}, () => {
    expect(add(2, 3)).toBe(5);
  });

  test("should subtract two numbers correctly", {tags: ["frontend"]}, () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("should multiply two numbers correctly", {tags: ["frontend"]}, () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("should divide two numbers correctly", {tags: ["frontend"]}, () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("should throw an error when dividing by zero", {tags: ["frontend"]}, () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
