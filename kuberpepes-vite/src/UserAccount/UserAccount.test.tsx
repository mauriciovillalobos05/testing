import {test, expect, describe} from 'vitest';
import {render} from '@testing-library/react';
import { UserAccount, type IUserAccount } from './UserAccount';

describe('UserAccount Component', () => {
    test('UserAccount component renders correctly with a user prop', () => {
        const user: IUserAccount = {
            id: 1,
            name: 'John Doe',
            isManager: true
        };

        const { getByText } = render(<UserAccount user={user} />);

        expect(getByText('User Profile')).toBeInTheDocument();
        expect(getByText('Name:')).toBeInTheDocument();
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('Edit Button')).toBeInTheDocument();
    });

    test(' Edit button is displayed only when the user is a manager', () => {
        const managerUser: IUserAccount = {
            id: 1,
            name: 'Jane Doe',
            isManager: true
        };

        const { getByText } = render(<UserAccount user={managerUser} />);
        expect(getByText('Edit Button')).toBeInTheDocument();
    });

    test('Edit button is not displayed when the user is not a manager', () => {
        const user: IUserAccount = {
            id: 3,
            name: 'Alice Smith',
            isManager: false
        };

        const { queryByText } = render(<UserAccount user={user} />);
        expect(queryByText('Edit Button')).toBeNull();
    });
        
});