import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import { Button, Card, CardSection, Input } from '../components/common'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'

const AuthScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const error = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)
    const authenticatedUser = useSelector(state => state.auth.currentUser)
    const authState = useSelector(state => state.auth)
    console.log(authState)
    const dispatch = useDispatch()

    useEffect(() => {
        
    })

    const onButtonPress = () => {
        dispatch(actions.userEmailLogin(email, password))
    }

    
    const renderButton = () => {
        if (loading) {
            return (
                <Button disabled >
                    Sign In
                </Button>
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
    }

    const renderLogoutButton = () => {
        if (loading) {
            return (
                <Button disabled >
                    Sign Out
                </Button>
            )
        }
        return (
            <Button onPress={onLogoutButtonPress} >
                Sign Out
            </Button>
        )
    }

    const onObtainAuthStateStatusButtonPress = () => {
        dispatch(actions.obtainCurrentUser)
    }

    const renderObtainAuthStateStatusButton = () => {
        if (loading) {
            return (
                <Button disabled >
                    Obtain Auth State Status
                </Button>
            )
        }
        return (
            <Button onPress={onObtainAuthStateStatusButtonPress} >
                Obtain Auth State Status
            </Button>
        )
    }

    return (
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
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    }
}

export { AuthScreen }
