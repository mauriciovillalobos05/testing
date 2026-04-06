import {describe, expect, test, it} from 'vitest';
import {add, subtract, multiply, divide} from './mathOperations';

describe('math operations', () => {
  test.skip('addition', () => {
    expect(1 + 1).toBe(2);
  });

  it.skip('subtraction', () => {
    expect(5 - 2).toBe(3);
  });

  test.skip('consolelog', () => {
    console.log("Hello, World!");
  });

  test('should add two numbers correctly', () => {
    expect(add(2,3)).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    expect(subtract(5,2)).toBe(3);
  });

  test('should multiply two numbers correctly', () => {
    expect(multiply(4,3)).toBe(12);
  });

  test('should divide two numbers correctly', () => {
    expect(divide(10,2)).toBe(5);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => divide(10,0)).toThrow("Cannot divide by zero");
  });
});