import React from 'react'
import { UserProvider } from './Store';
import HomePage from './HomePage';

export default function MainApp() {
    const user = { name: 'Sanyam', loggedIn: true };
    return (
        <UserProvider value={user}>
            <HomePage />
        </UserProvider>
    )
}
