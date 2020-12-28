import { createStackNavigator } from "@react-navigation/stack"
import { AuthParamList } from "./AuthParamList"
import React from 'react'
import LoginScreen from "../screens/login/LoginScreen"
import RegisterScreen from "../screens/register/RegisterScreen"

const Stack = createStackNavigator<AuthParamList>()

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null
        }} initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={RegisterScreen} />
        </Stack.Navigator>)
}

export default AuthStack