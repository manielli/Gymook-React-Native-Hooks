import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    Animated
} from 'react-native'
import { Button, Card, CardSection, Input } from '../components/common'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import * as AppleAuthentication from 'expo-apple-authentication'

const AuthScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const error = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)
    const authState = useSelector(state => state.auth)
    console.log(authState)
    const dispatch = useDispatch()
    const position = new Animated.ValueXY(0, 0)
    Animated.spring(position, {toValue: { x: 0, y: -300}}).start()

    useEffect(() => {
        
    })

    const onSignInWithAppleButton = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL
                ]
            })
            console.log(credential)
            //Signed In ...
            if (credential.user) {
                await navigation.navigate('Bookings Screen')
            } else {
                console.log(credential.error)
            }
        } catch (error) {
            if (error.code === 'ERR_CANCELED') {
                console.log(error)
                //Sign in flow canceled by the user
            } else {
                console.log(error)
                //Other errors
            }
        }
    }

    const onLoginButtonPress = async () => {
        try {
            dispatch(actions.userEmailLogin(email, password))
            if (authState.currentUser) {
                await navigation.navigate('Bookings Screen')
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    const renderLoginButton = () => {
        if (loading) {
            return (
                <Button disabled >
                    Sign In
                </Button>
                )
            }
            
            return (
                <Button onPress={onLoginButtonPress} >
                    Email Sign In
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
        dispatch(actions.obtainCurrentUser())
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
                <Animated.View style={position.getLayout()} >
                    <CardSection>
                        <Input 
                            value={email}
                            label='Email'
                            onChangeText={email => setEmail(email)}
                            placeholder='user@emailaddress.com'
                        />
                    </CardSection>
                </Animated.View>
                <Animated.View style={position.getLayout()}>
                    <CardSection>
                        <Input 
                            value={password}
                            label='Password'
                            onChangeText={password => setPassword(password)}
                            placeholder='password'
                            secureTextEntry={true}
                        />
                    </CardSection>
                </Animated.View>
                <Animated.View style={position.getLayout()}>    
                    <CardSection>
                        {renderLoginButton()}
                    </CardSection>
                </Animated.View>
                {/* <CardSection>
                    {renderLogoutButton()}
                </CardSection>
                <CardSection>
                    {renderObtainAuthStateStatusButton()}
                </CardSection> */}
            </Card>
            <Animated.View style={position.getLayout()}>        
                <AppleAuthentication.AppleAuthenticationButton 
                    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                    cornerRadius={25}
                    style={styles.appleAuthButton}
                    onPress={onSignInWithAppleButton}
                />
            </Animated.View>
        </LinearGradient>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    appleAuthButton: {
        width: '95%',
        height: 50,
        alignSelf: 'center',
        margin: 5,
    }
}

export { AuthScreen }
