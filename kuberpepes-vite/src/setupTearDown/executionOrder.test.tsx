import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from "vitest";

beforeAll(() => console.log('BeforeAll'))
afterAll(() => console.log('AfterAll'))
beforeEach(() => console.log('beforeEach externo'))
afterEach(() => console.log('afterEach externo'))

describe('setupTearDown', () => {
    beforeEach(() => console.log('beforeEach interno'))
    afterEach(() => console.log('afterEach interno'))   
    test('first test', () => {
        console.log('first test');
    })
    test('second test', () => {
        console.log('second test');
    })
})