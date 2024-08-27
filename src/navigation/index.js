import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "../screens/Splash";
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Fav from '../screens/Fav';
import Map from '../screens/Map';
import Help from '../screens/Help';
import Bestseller from '../screens/Bestseller'
import { FontAwesome, MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      
    >
      <Tab.Screen name="Home" 
      component={Home} 
      options={{ tabBarIcon: ({ color }) => (<FontAwesome name="home" size={24} color={'#ec724a'} />), headerShown: true }} />
      <Tab.Screen name="Favorite" 
      component={Fav} 
      options={{ tabBarIcon: ({ color }) => (<FontAwesome name="heart" size={24} color={'#ec724a'} />), headerShown: true }} />
      <Tab.Screen name="Map"                                         
      component={Map} 
      options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="google-maps" size={24} color={'#ec724a'} />), headerShown: true }} />
      <Tab.Screen name="Help" 
      component={Help} 
      options={{ tabBarIcon: ({ color }) => (<FontAwesome5 name="headset" size={24} color="#ec724a" />), headerShown: true }} />
      <Tab.Screen name="You" 
      component={Profile} 
      options={{ tabBarIcon: ({ color }) => (<FontAwesome name="user" size={24} color={'#ec724a'} />), headerShown: true }} />

    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bestseller" component={Bestseller} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

