import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest";

let db;
const connectToDatabase = async () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Connected to db");
        }, 1000)
    })
}

describe('Test after all and before all', () => {
    beforeAll(async () => {
        db = await connectToDatabase();
    });
    afterAll(async () => {
        await db.close();
    });
    test('can query users', async () => {
        const users = await db.query('SELECT * FROM USERS');
        expect(users.length).toBeGreaterThan(0);
    })
    test('can query products', async () => {
        const users = await db.query('SELECT * FROM PRODUCTS');
        expect(users.length).toBeGreaterThan(0);
    })
})

describe.skip('setupTearDown', () => {
    let items:String[];
    beforeEach(() => {
        items = ['blackie', 'willy', 'laflame'];
    });
    afterEach(() => {
        items = [];
    });
    test('should run before each test', () => {
        expect(items).toHaveLength(3);
    })
    test('should add an item', () => {
        items.push('juanma');
        expect(items).toHaveLength(4);
    })
})