
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SavedScreen from "../screens/saved/SavedScreen";
import { NavBarParamList } from "./NavBarParamList";

const Tabs = createBottomTabNavigator<NavBarParamList>()

const BottomNavBar = () => {
    return (
        <Tabs.Navigator
            //     initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    // You can return any component that you like here!
                    if (route.name === "Home") {
                        return <Ionicons name="home-outline" size={size} color={color} />;
                    } else if (route.name === "Saved") {
                        return <Ionicons name="add-outline" size={size} color={color} />;
                    } else if (route.name === "Profile") {
                        return <Ionicons name="person-outline" size={size} color={color} />;
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#428E7C',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name='Home' component={HomeScreen} />
            <Tabs.Screen name='Saved' component={SavedScreen} />
            <Tabs.Screen name='Profile' component={ProfileScreen} />
        </Tabs.Navigator>
    )
}

export default BottomNavBar