import { describe, test, expect } from "vitest";
import Counter from "./Counter";
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

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

    test('it should increment with increment button', () => {
        render(<Counter />);
        const currentCount= screen.getByTestId('Counter-Value');
        const incrementButton = screen.getByRole('button', {name: 'Increment'});
        expect(currentCount).toHaveTextContent('0');
        fireEvent.click(incrementButton);
        expect(currentCount).toHaveTextContent('1');
    })
})