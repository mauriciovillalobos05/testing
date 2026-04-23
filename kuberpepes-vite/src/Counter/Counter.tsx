import { useState } from "react";
import { Buttons } from "./Buttons";
import type { CounterProps } from "./ICounter";
import { ResetButton } from "./ResetButton";

const dataTestId: string = "Counter";
const Counter = ({ initialCount = 0 }: CounterProps) => {
    const [counter, setCounter] = useState(initialCount);

    return (
        <div>
            <header>
                <h1 data-testid={`${dataTestId}-Header`}>This is a Counter Hello</h1>
            </header>
            <h2 data-testid={`${dataTestId}-Value`}>{counter}</h2>
            <div>
                <Buttons dataTestId={dataTestId} setCounter= {setCounter} />
                <ResetButton dataTestId={dataTestId} setCounter= {setCounter} />
            </div>
        </div>
    )
};
export default Counter;