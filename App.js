import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from './components'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName=' ' 
        screenOptions={{
          headerStyle: {
            backgroundColor: 'steelblue'
          }
        }}
      >
        <Stack.Screen name=' ' >
          {props => <Spinner size='large' />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
