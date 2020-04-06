import React from 'react'
import { Spinner } from '../components/common'
import { useSelector } from 'react-redux'

const WelcomeScreen = ({ navigation }) => {
    const authenticatedUser = useSelector(state => state.auth.currentUser)
    console.log(authenticatedUser)
    
    const renderSpinner = () => {
        if (!authenticatedUser) {
            navigation.navigate('Sign In/Up')
        } 
        return (
            <Spinner />
        )
    }
    
    return (
            renderSpinner()
    )
}

export { WelcomeScreen }