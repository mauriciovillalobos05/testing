import { describe, expect, test, vi } from "vitest";
import { getUser, variable } from "./mocking";
vi.mock('./mocking', () => {
    return {
        getUser: vi.fn(),
        variable: "mock",
    }
})

describe('mocking modules examples', () => {
    test('mock a module', () => {
       vi.mocked(getUser).mockReturnValue('Mauricio');
        const user=getUser()
        expect(user).toBe('Mauricio');
        expect(variable).toBe('mock');
    });
})