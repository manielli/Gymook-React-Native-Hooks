import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from './components'

const Stack = createStackNavigator()

export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName=' '
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'steelblue',
                    },
                }}
            >
                <Stack.Screen name=' ' component={Spinner} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}