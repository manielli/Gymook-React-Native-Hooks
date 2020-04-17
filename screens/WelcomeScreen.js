import React from 'react'
import { BookingsScreen } from './BookingsScreen'
import { useSelector } from 'react-redux'

const WelcomeScreen = ({ navigation }) => {
    const authState = useSelector(state => state.auth)
    // console.log(authState)
    
    const renderSpinner = () => {
        if (!authState.currentUser) {
            navigation.navigate('Sign In/Up')
        } 
        return (
            <BookingsScreen />
        )
    }
    
    return (
            renderSpinner()
    )
}

export { WelcomeScreen }