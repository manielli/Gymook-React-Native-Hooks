import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthScreen } from './screens/AuthScreen'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { BookingsScreen } from './screens/BookingsScreen'

const Stack = createStackNavigator()

export default function AppRouter() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Welcome Screen'
                screenOptions={{
                    headerStyle: {
                        // backgroundColor: 'steelblue',
                        headerShown: false,
                    },
                }}
            >
                <Stack.Screen name='Welcome Screen' component={WelcomeScreen} />
                <Stack.Screen name='Auth Screen' component={AuthScreen} />
                <Stack.Screen name='Bookings Screen' component={BookingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}