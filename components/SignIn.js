import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import { Button, Card, CardSection, Input } from './common'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import { actions as authActions } from '../actions/auth_actions'

const SignIn = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState({email: null, password: null})
    const [loading, setLoading] = useState(false)
    const authenticatedUser = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('component did mount and updated!')
    })

    const onButtonPress = () => {
        setLoading(true)
        dispatch(authActions.loginUserEmailSuccess({ email, password }))
    }

    const renderButton = () => {
        if (loading) {
            return <ActivityIndicator style={{color: 'maroon'}} size='small' />
        }

        return (
            <Button onPress={onButtonPress} >
                Log In
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
