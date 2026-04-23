import type { ReactElement } from "react";
import userEvent from '@testing-library/user-event';
import {render} from '@testing-library/react';


//creating a helper function for rendering
type RenderOptions = Parameters< typeof render >[1]
export function setupUserEvent(ui: ReactElement, options?: RenderOptions) {
    return {
        ...render(ui, options),
        user: userEvent.setup(),
    }
}