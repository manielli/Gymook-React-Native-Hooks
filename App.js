import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Initializing from './components/Initializing'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name=' ' 
          component={Initializing} 
          color='steelblue'
          options={{
            headerStyle: {
              backgroundColor: 'steelblue',
            }
          }} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
