// vitests run test files in parallel across multiple workers
// by default tests are executed sequentially 
// we can enable parallel execution

import { describe, expect, test } from "vitest";

const fetchUser = async (id: number) => {
    return new Promise<{name:string}>((resolve)=> {
        setTimeout(() => {
            resolve({ name: "Jose"});
        }, 1000)
    });
}

const fetchPosts = async (userId: number) => {
    return new Promise<Array<{id: number; title: string}>>((resolve)=>{
        setTimeout(()=>{
            resolve([
                {id: 1, title: "Post 1"},
                {id: 2, title: "Post 2"},
                {id: 3, title: "Post 3"}
            ])
        })
    });
}
describe('test parallelism', () => {
    test.concurrent('fetches user profile', async () => {
        const user = await fetchUser(1);
        expect(user.name).toBe("Jose");
    });
    test.concurrent('fetches user posts', async () => {
        const posts = await fetchPosts(1);
        expect(posts).toHaveLength(3);
    });
})