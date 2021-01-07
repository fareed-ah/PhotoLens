import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import { useState } from 'react';

type User = null | { username: string }

export const AuthContext = React.createContext<{
    user: User,
    login: () => void,
    logout: () => void,
    signUp: () => void,
}>({
    user: null,
    login: () => { },
    logout: () => { },
    signUp: () => { },
});
interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = (props: AuthProviderProps) => {
    const [user, setUser] = useState<User>(null);
    return (<AuthContext.Provider value={{
        user,
        login: () => {
            const fakeUser = { username: "bob" };
            setUser(fakeUser);
            try {
                AsyncStorage.setItem('user', JSON.stringify(fakeUser))
            } catch (e) {
                // saving error
            }
        },
        logout: () => {
            try {
                setUser(null);
                AsyncStorage.removeItem("user")
            } catch (e) {
                // saving error
            }
        },
        signUp: () => {

        }
    }}>{props.children}</AuthContext.Provider>)

}

export default AuthProvider