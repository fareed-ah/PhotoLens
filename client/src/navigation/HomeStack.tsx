import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'
import CategoryViewScreen from "../screens/category_view/CategoryView"
import HomeScreen from "../screens/home/HomeScreen"
import { HomeStackParamList } from "./HomeStackParamList"

const Stack = createStackNavigator<HomeStackParamList>()

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null
        }} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={CategoryViewScreen} />
        </Stack.Navigator>)
}

export default HomeStack