import {
    USER_EMAIL_LOGIN,
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGIN_COMPLETE,
    USER_EMAIL_LOGOUT,
    USER_EMAIL_LOGOUT_FAIL,
    USER_EMAIL_LOGOUT_COMPLETE,
    OBTAIN_CURRENT_USER,
    OBTAIN_CURRENT_USER_COMPLETE,
    OBTAIN_CURRENT_USER_FAIL,
    SIGN_IN_WITH_APPLE_LOGIN,
    SIGN_IN_WITH_APPLE_LOGIN_FAIL,
    SIGN_IN_WITH_APPLE_LOGIN_COMPLETE
} from './types'
import { AsyncStorage } from 'react-native'
import { Session, User } from '../requests'
import * as AppleAuthentication from 'expo-apple-authentication'

export const userEmailLogin = (userEmail, userPassword) => {
    return async function(dispatch) {
        dispatch({ type: USER_EMAIL_LOGIN })
        try {
            Session.create({
                email: userEmail, 
                password: userPassword
            }).then(data => {
                if (data.status == "200") {
                    dispatch({
                        type: USER_EMAIL_LOGIN_COMPLETE,
                        payload: data.user
                    })
                } else {
                    dispatch({
                        type: USER_EMAIL_LOGIN_FAIL,
                        payload: data
                    })
                }
            }).catch((error) => {
                dispatch({
                    type: USER_EMAIL_LOGIN_FAIL,
                    payload: error
                })
            })
        } catch (error) {
            dispatch({
                type: USER_EMAIL_LOGIN_FAIL,
                payload: error
            })
        }
    }
}

export const userEmailLogout = () => {
    return async function(dispatch) {
        dispatch({ type: USER_EMAIL_LOGOUT })
        try {
            Session.destroy()
                .then(data => {
                    if (data.status == "200") {                        
                        dispatch({
                            type: USER_EMAIL_LOGOUT_COMPLETE
                        })
                    } else {
                        dispatch({
                            type: USER_EMAIL_LOGOUT_FAIL,
                            payload: data
                        })
                    }
                }).catch((error) => {
                    dispatch({
                        type: USER_EMAIL_LOGOUT_FAIL,
                        payload: error
                    })
                })
        } catch (error) {
            dispatch({
                type: USER_EMAIL_LOGOUT_FAIL,
                payload: error
            })
        }
    }

}

export const obtainCurrentUser = () => {
    return async function(dispatch) {
        dispatch({ type: OBTAIN_CURRENT_USER })
        try {
            User.current().then(data => {
                if (data.status == "200") {
                    dispatch({
                        type: OBTAIN_CURRENT_USER_COMPLETE,
                        payload: data.user
                    })
                } else {
                    dispatch({
                        type: OBTAIN_CURRENT_USER_FAIL,
                        payload: data
                    })
                }
            }).catch((error) => {
                dispatch({
                    type: OBTAIN_CURRENT_USER_FAIL,
                    payload: error
                })
            })
        } catch (error) {
            dispatch({
                type: OBTAIN_CURRENT_USER_FAIL,
                payload: error
            })
        }
    }
}

export const signInWithAppleLogin = async dispatch => {
    dispatch({ type: SIGN_IN_WITH_APPLE_LOGIN })
    let token = await AsyncStorage.getItem('identityToken')
    if (token) {
        dispatch({
            type: SIGN_IN_WITH_APPLE_LOGIN_COMPLETE,
            payload: token
        })
    } else {
        doSignInWithAppleLogin(dispatch)
    }
}

const doSignInWithAppleLogin = async dispatch => {
    try {
        const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL
            ]
        })
        // console.log(credential)
    
        if (credential) {
            dispatch({
                type: SIGN_IN_WITH_APPLE_LOGIN_COMPLETE,
                payload: credential
            })
        } else {
            dispatch({
                type: SIGN_IN_WITH_APPLE_LOGIN_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: SIGN_IN_WITH_APPLE_LOGIN_FAIL
        })
        console.log(error)
    }
}
