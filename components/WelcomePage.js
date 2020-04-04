import React from 'react'
import { View } from 'react-native'
import { Spinner } from './common'
import { useSelector } from 'react-redux'

const WelcomePage = ({ navigation }) => {
    const authenticatedUser = useSelector(state => state.auth)
    console.log(authenticatedUser)
    
    const renderSpinner = () => {
        if (authenticatedUser) {
            navigation.navigate('Sign In/Up')
        } 
        return (
            <Spinner />
        )
    }
    
    return (
        <View style={{backgroundColor: 'steelblue'}} >
            {renderSpinner()}
        </View>
    )
}

export { WelcomePage }