import { describe, test, expect, it } from "vitest";
import { shoppingList, taskData } from "../constants";
import { compileCode } from "../utils";
describe("matchers example files", () => {
    test.skip("common mathcer", () => {
        // toBe: numbers, strings and booleans
        expect(2+2).toBe(4);
    });
    test.skip("object matcher", () => {
        // toEqual: arrays, sets, objects, maps
        const a = { name: "John", age: 20 };
        const b = { name: "John", age: 20 };

        expect(a).toEqual(b);
    });
    test.skip( "compare decimals", () => {
        // toBeCloseTo: floating
        expect(0.1+0.2).toBeCloseTo(0.3)
        expect(0.1+0.2).toBeCloseTo(0.3)
    });
    test.skip(" greater/smaller/equal than ", () => {
        expect(5).toBeGreaterThan(3);
        expect(5).toBeGreaterThanOrEqual(5);
        expect(5).toBeLessThan(10);
        expect(5).toBeLessThanOrEqual(5);
    });
    it.skip("truthy and falsy", () => {
        const d = "";
        const e = false;
        const f = true;
        const g= null;
        const h = 0;
        const i = undefined;

        //expect(d).toBeNull();
        expect(g).toBeNull();
        expect(d).toBeFalsy();
        expect(e).toBeFalsy();
        expect(h).toBeFalsy();
        expect(g).toBeFalsy();

        expect(!g).toBeTruthy();
        expect(g).not.toBeTruthy(); //best practice

        expect(i).toBeFalsy();
        expect(f).toBeTruthy();
    });
    test.skip("there is no i in team", () => {
        const errorMessage:string = "this is an error message";
        expect("team").not.toMatch(/I/);
        expect(errorMessage).toMatch(/error/);
    });

    test.skip("the shopping list has milk", () => {
        expect(shoppingList).toContain('milk');
    });

    test.skip('to match object', () => {
        expect(taskData).toMatchObject({
            assign: "Alice",
            priority: 1
        })

        expect(taskData).toHaveProperty('createdAt')
    });

    test.skip('compiling empty string', () => {
        // check if an error was sent
        expect(() => compileCode('')).toThrow();
        expect(() => compileCode('')).toThrow('cannot compile empty string');
        expect(() => compileCode('')).toThrow(/empty string/);
    });

    //Soft Assertions
    test.skip('soft throw', () => {
        expect(() => compileCode('')).toThrow();
        expect.soft(() => compileCode('')).toThrow('cannot hello');
        expect(() => compileCode('')).toThrow('hello');
    });
});