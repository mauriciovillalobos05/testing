import { useState } from "react";

type CounterProps = { initialCount?: number };
interface ICounterProps {
    initialCount?: number;
}
const dataTestId: string = "Counter";
const Counter = ({ initialCount = 0 }: CounterProps) => {
    const [counter, setCounter] = useState(initialCount);

    //functiones
    const reset = () => setCounter(0); // function reset() { return setCounter(0);}

    return (
        <div>
            <header>
                <h1 data-testid={`${dataTestId}-Header`}>This is a Counter Hello</h1>
            </header>
            <div data-testid={`${dataTestId}-Value`}>{counter}</div>
            <div>
                <button name="reset" data-testid={`${dataTestId}-ResetBtn`} onClick={reset}
                >
                    Reset
                </button>
                <button 
                name="increment"
                data-testid={`${dataTestId}-IncrementBtn`} 
                onClick={() => setCounter((n) => n+1)}
                >
                    Increment
                </button>
            </div>
        </div>
    )
};
export default Counter;