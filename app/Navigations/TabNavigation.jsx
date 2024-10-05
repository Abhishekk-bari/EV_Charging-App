import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text} from 'react-native'
import HomeScreen from '../(tabs)/App/Screen/LoginScreen/HomeScreen/HomeScreen'
import ProfileScreen from '../(tabs)/App/Screen/ProfileScreen/ProfileScreen'
import FavoriteScreen from '../(tabs)/App/Screen/FavoriteScreen/FavoriteScreen'

const Tab=createBottomTabNavigator();
export default function TabNavigation() {
return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
        <Tab.Screen name='home' 
        component={HomeScreen}/>
        <Tab.Screen name='favorite' 
        component={FavoriteScreen}/>
        <Tab.Screen name='profile' 
        component={ProfileScreen}/>
    </Tab.Navigator>
)
}
