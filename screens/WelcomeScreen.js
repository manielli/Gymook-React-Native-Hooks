import React from 'react'
import { BookingsScreen } from './BookingsScreen'
import { useSelector } from 'react-redux'
import { Spinner } from '../components/common'
import { AuthScreen } from './AuthScreen'

const WelcomeScreen = ({ navigation }) => {
    const authState = useSelector(state => state.auth)
    
    const renderSpinner = () => {
        switch (authState.loading) {
            case true:
                return <Spinner />
            case false:
                return authState.currentUser ? <BookingsScreen /> : <AuthScreen />
            default:
                return <Spinner />
        }
    }
      
    return (
            renderSpinner()
    )
}

export { WelcomeScreen }