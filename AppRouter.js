import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from './components/SignIn'
import { WelcomePage } from './components/WelcomePage'

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
                <Stack.Screen name=' ' component={WelcomePage} />
                <Stack.Screen name='Sign In/Up' component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}