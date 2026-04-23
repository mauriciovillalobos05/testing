import { useState } from 'react';
import React from 'react';
import type { IButtonsProps } from './ICounter';

export const Buttons = ({ dataTestId, setCounter }: IButtonsProps) => {
  return (
    <button
      name="increment"
      data-testid={`${dataTestId}-IncrementBtn`}
      onClick={() => setCounter((n) => n + 1)}
    >
      Increment
    </button>
  );
};
