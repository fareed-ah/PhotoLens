import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import { useState } from 'react';
import AuthProvider from '../navigation/AuthProvider';
import Routes from '../navigation/Routes';

interface ProvidersProps {
}

const Providers = (props: ProvidersProps) => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default Providers