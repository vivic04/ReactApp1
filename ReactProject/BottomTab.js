import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import UserScreen from './SettingsScreen';

const Tab = createBottomTabNavigator;
export  const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name  = 'Home' component = {HomeScreen}/>
        <Tab.Screen name  = 'User' component = {UserScreen}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})