import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthScreen } from './screens/AuthScreen'
import { WelcomeScreen } from './screens/WelcomeScreen'

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
                <Stack.Screen name=' ' component={WelcomeScreen} />
                <Stack.Screen name='Sign In/Up' component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}