import { describe, expect, test, vi } from "vitest";

describe('Mocking functions examples', () =>{
    test('should mock getNumber function', () => {
        //Mocking function vi.fn() == vi.fn(()=> undefined)
        const getNumber = vi.fn(()=> 5000);
        const number = getNumber();
        expect(number).toBe(5000);
        expect(getNumber).toHaveBeenCalled();
        expect(getNumber).toHaveReturnedWith(5000);
        getNumber.mockImplementation(()=>3000);
        expect(getNumber()).toBe(3000);
    })

    test('should mock async function', async () => {
        const fetchUser = vi.fn();
        fetchUser.mockResolvedValue({name: 'kuberpepes'});
        const user = await fetchUser();
        expect(user.name).toBe('kuberpepes');

        fetchUser.mockRejectedValue(new Error('Not Found'));
        await expect(fetchUser()).rejects.toThrow('Not Found')
    })
    test('inspecting mock calls', () => {
        const greet = vi.fn();
        greet('Alice');
        greet('Bob', 'Jesus');
        expect(greet).toHaveBeenCalledTimes(2);
        //check specific arguments
        expect(greet).toHaveBeenCalledWith('Alice');
        expect(greet.mock.calls).toEqual(
            [
                ["Alice"], ["Bob", "Jesus"]
            ]
        )
        console.log('mock.calls: ', greet.mock.calls);
        console.log('mock.results: ', greet.mock.results);
    })
    test('should mock async function', async () => {
        const multiplyNumber = vi.fn().mockImplementation((factor) => {
            return factor*2;
        })
        expect(multiplyNumber(3)).toBe(6);
    })
})