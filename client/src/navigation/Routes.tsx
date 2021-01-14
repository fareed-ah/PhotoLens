import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import SplashScreen from "../screens/splash_screen/SplashScreen";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import BottomNavBar from "./BottomNavTabs";

const Routes = () => {
    const { user, login } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // check if user is logged in or not
        AsyncStorage.getItem('user').then(userString => {
            if (userString) {
                //decode it
                login()
            }
            setLoading(false)
            console.log(userString)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    if (loading) {
        console.log(user)
        console.log(loading)
        return (
            <SplashScreen />
        )
    }

    return (
        <NavigationContainer>
            {user ? (<BottomNavBar />) : (<AuthStack />)}
        </NavigationContainer>
    );
}

export default Routes;
