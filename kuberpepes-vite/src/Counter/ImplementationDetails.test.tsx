import {act} from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";

describe("We should not test like this", () => {
    test('Test counter with ReactDOM', () => {
        const div= document.createElement('div');
        const root = createRoot(div);
        act(() => {
            root.render(<Counter />);
        });
        const [reset, increment] = div.querySelectorAll('button');
        const count = (div.firstChild as HTMLElement).querySelector('h2');

        const incrementClickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 });

        expect(count!.textContent).toBe('0');
        act(() => increment.click());
        expect(count!.textContent).toBe('1');
        act(() => reset.click());
        expect(count!.textContent).toBe('0');
        act(() => increment.dispatchEvent(incrementClickEvent));
        expect(count!.textContent).toBe('1');
    });
});