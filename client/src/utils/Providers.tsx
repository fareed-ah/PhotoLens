import React from 'react'
import AuthProvider from '../navigation/AuthProvider';
import Routes from '../navigation/Routes';

const Providers = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default Providers