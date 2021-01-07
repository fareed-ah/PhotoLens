import React from 'react'
import AuthProvider from '../navigation/AuthProvider';
import Routes from '../navigation/Routes';
import { createClient, Provider } from 'urql';

const client = createClient({
    url: 'http://localhost:3000/graphql',
});

const Providers = () => {
    return (
        <Provider value={client}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </Provider>
    );
}

export default Providers