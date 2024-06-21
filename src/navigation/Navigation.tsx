import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen/ChartScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ChartScreen" component={ChartScreen} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})