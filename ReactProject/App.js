import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList
} from 'react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import Feed from './Feed';
import Messages from './Messages';
import RegisterScreen from './RegisterScreen';

const Tab = createBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegisterScreen'>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App; 