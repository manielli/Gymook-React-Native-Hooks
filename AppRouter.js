import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { SignIn } from './components/SignIn'
import { WelcomePage } from './components/WelcomePage'

const Stack = createStackNavigator()

export default function AppRouter() {
    const authenticatedUser = useSelector(state => state.auth)

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Sign In/Up'
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