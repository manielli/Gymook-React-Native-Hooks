import React, { useState, useEffect } from 'react'
import {
    View,
    Text
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector } from 'react-redux'

const SignIn = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState({email: null, password: null})
    const [loading, setLoading] = useState(false)
    const authenticatedUser = useSelector(state => state.auth)

    return (
        <View style={styles.container} >
            <LinearGradient
                style={[styles.container, styles.signInFields]}
                colors={['steelblue', 'white', 'maroon']}
            >
                <Text>Gymook</Text>
            </LinearGradient>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    signInFields: {
        width: '100%',
    },
}

export { SignIn }
