import React from 'react'
import AuthProvider from '../navigation/AuthProvider';
import Routes from '../navigation/Routes';
import { createClient, Provider, defaultExchanges } from 'urql';
import { devtoolsExchange } from '@urql/devtools';

const client = createClient({
    url: 'http://192.168.2.14:3000/graphql',
    exchanges: [devtoolsExchange, ...defaultExchanges],
    fetchOptions: {
        credentials: "include",
    }
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