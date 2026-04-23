export interface IButtonsProps {
  dataTestId: string;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

interface ICounterProps {
    initialCount?: number;
}

export type CounterProps = { initialCount?: number };