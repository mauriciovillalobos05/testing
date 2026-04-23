import { describe, test, expect } from "vitest";
import Counter from "./Counter";
import {render, screen,} from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupUserEvent } from "./setupUserEvent";

describe('should test Counter component', () =>{
    test('it should render', () => {
        render(<Counter />);
        const currentCount= screen.getByTestId('Counter-Value');
        screen.debug(currentCount);
        expect(currentCount.innerHTML).toBe('0');
    })
    test('it should render with jest dom', () => {
        render(<Counter />);
        const currentCount= screen.getByTestId('Counter-Value');
        screen.debug(currentCount);
        expect(currentCount).toHaveTextContent('0');
    })

    test('it should increment with increment button', async () => {
        const { user } = setupUserEvent(<Counter />);
        const currentCount= screen.getByTestId('Counter-Value');
        const incrementButton = screen.getByRole('button', {name: 'Increment'});
        expect(currentCount).toHaveTextContent('0');
        await user.click(incrementButton);
        expect(currentCount).toHaveTextContent('1');
    })

    test('it should reset with reset button', async () => {
        const { user } = setupUserEvent(<Counter />);
        const currentCount= screen.getByTestId('Counter-Value');
        const incrementButton = screen.getByRole('button', {name: 'Increment'});
        const resetButton = screen.getByRole('button', {name: 'Reset'});
        expect(currentCount).toHaveTextContent('0');
        await user.click(incrementButton);
        expect(currentCount).toHaveTextContent('1');
        await user.click(resetButton);
        expect(currentCount).toHaveTextContent('0');
    })
})