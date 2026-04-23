import {test, expect, describe} from 'vitest';
import {render} from '@testing-library/react';
import type { IUserAccount } from './UserAccount';
import { UserList } from './UserList';

describe('UserAccount List Component', () => {
    test('UserList component renders correctly with a list of users', () => {
        const users: IUserAccount[] = [
            { id: 1, name: 'John Doe', isManager: true },
            { id: 2, name: 'Jane Doe', isManager: false },
        ];

        const { getByText } = render(<UserList users={users} />);

        expect(getByText('User List')).toBeInTheDocument();
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('Jane Doe')).toBeInTheDocument();
    });

    test('No users found message is displayed when the users prop is empty', () => {
        const { getByText } = render(<UserList users={[]} />);

        expect(getByText('No users found.')).toBeInTheDocument();
    });

    test('user names are displayed as links in the list', () => {
        const users: IUserAccount[] = [
            { id: 1, name: 'John Doe', isManager: true },
            { id: 2, name: 'Jane Doe', isManager: false },
        ];

        const { getByText } = render(<UserList users={users} />);

        const johnLink = getByText('John Doe');
        const janeLink = getByText('Jane Doe');

        expect(johnLink).toBeInTheDocument();
        expect(johnLink.tagName).toBe('A');
        expect(johnLink.getAttribute('href')).toBe('#user-1');

        expect(janeLink).toBeInTheDocument();
        expect(janeLink.tagName).toBe('A');
        expect(janeLink.getAttribute('href')).toBe('#user-2');
    });
        
});