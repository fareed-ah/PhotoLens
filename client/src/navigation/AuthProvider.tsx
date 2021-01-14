import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import { useState } from 'react';
import { User } from '../generated/graphql';

export type CurrentUser = ({
    __typename?: "User" | undefined;
} & Pick<User, "email" | "id" | "firstName" | "lastName">) | null | undefined

export const AuthContext = React.createContext<{
    user: CurrentUser,
    login: (loginUser: CurrentUser) => void,
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
    const [user, setUser] = useState<CurrentUser>(null);
    return (<AuthContext.Provider value={{
        user,
        login: (loginUser) => {
            setUser(loginUser);
            try {
                AsyncStorage.setItem('user', JSON.stringify(loginUser))
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