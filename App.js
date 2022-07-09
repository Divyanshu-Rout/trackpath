import { View, Text } from 'react-native'
import React from 'react'
import SignUpScreen from './src/screens/Auth/SignUpScreen'
import SignInScreen from './src/screens/Auth/SignInScreen'
import AccountScreen from './src/screens/MainScreens/AccountScreen'
import TrackCreateScreen from './src/screens/MainScreens/TrackCreateScreen'
import TrackListScreen from './src/screens/MainScreens/TrackListScreen'
import TrackDetailScreen from './src/screens/MainScreens/TrackDetailScreen'

//navigator import 

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'



const App = () => {

  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  const TrackListFlow = () => {
    return (
      <Stack.Navigator>

        <Stack.Screen
          name="TrackList"
          component={TrackListScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TrackDetail"
          component={TrackDetailScreen} />
      </Stack.Navigator>
    )
  }

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="TrackListFlow" component={TrackListFlow} options={{ headerShown: false }} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tab"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App