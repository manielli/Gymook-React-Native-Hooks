import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import { Button, Card, CardSection, Input } from './common'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState({email: null, password: null})
    const [loading, setLoading] = useState(false)
    const authenticatedUser = useSelector(state => state.auth.currentUser)
    const dispatch = useDispatch()

    useEffect(() => {

    })

    const onButtonPress = () => {
        setLoading(true)
        dispatch(actions.userEmailLogin(email, password))
    }

    
    const renderButton = () => {
        if (loading) {
            return (
                <ActivityIndicator 
                color='maroon' 
                size='large'
                />
                )
            }
            
            return (
                <Button onPress={onButtonPress} >
                    Sign In
                </Button>
        )
    }
    
    const onLogoutButtonPress = () => {
        dispatch(actions.userEmailLogout())
        setLoading(false)
    }

    const renderLogoutButton = () => {
        return (
            <Button onPress={onLogoutButtonPress} >
                Sign Out
            </Button>
        )
    }

    const onObtainAuthStateStatusButtonPress = () => {
        dispatch(actions.obtainCurrentUser)
        setLoading(false)
        console.log('onObtainAuthStateStatusButtonPress:', authenticatedUser)
    }

    const renderObtainAuthStateStatusButton = () => {
        return (
            <Button onPress={onObtainAuthStateStatusButtonPress} >
                Obtain Auth State Status
            </Button>
        )
    }

    return (
        <View style={styles.container} >
            <LinearGradient
                style={styles.container}
                colors={['steelblue', 'white', 'maroon']}
            >
                <Card>
                    <CardSection>
                        <Input 
                            value={email}
                            label='Email'
                            onChangeText={email => setEmail(email)}
                            placeholder='user@emailaddress.com'
                        />
                    </CardSection>
                    <CardSection>
                        <Input 
                            value={password}
                            label='Password'
                            onChangeText={password => setPassword(password)}
                            placeholder='password'
                            secureTextEntry={true}
                        />
                    </CardSection>
                    <CardSection>
                        {renderButton()}
                    </CardSection>
                    <CardSection>
                        {renderLogoutButton()}
                    </CardSection>
                    <CardSection>
                        {renderObtainAuthStateStatusButton()}
                    </CardSection>
                </Card>
            </LinearGradient>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        width: '100%'
    }
}

export { SignIn }
