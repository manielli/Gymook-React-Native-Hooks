import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { Spinner } from './components'
import { SignIn } from './components'

const Stack = createStackNavigator()

export default function AppRouter() {
    const authenticatedUser = useSelector(state => state.auth)

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
                <Stack.Screen name='Sign In/Up' component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}