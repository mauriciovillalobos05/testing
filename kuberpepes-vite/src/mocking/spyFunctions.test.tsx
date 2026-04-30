import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { calculator } from "./mocking";

describe("spy functions examples", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });
    beforeEach(() => {
        vi.clearAllMocks();
        vi.restoreAllMocks();
        vi.resetAllMocks();
    })
    test("spying on add function", () => {
        const spy = vi.spyOn(calculator, 'add');
        expect(calculator.add(1,3)).toBe(4);
        expect(spy).toHaveBeenCalledWith(1, 3);
        expect(spy).toHaveBeenCalledTimes(1);
    });
})