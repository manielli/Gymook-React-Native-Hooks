import {
    USER_EMAIL_LOGIN_SUCCESS,
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGOUT_SUCCESS,
    USER_EMAIL_LOGOUT_FAIL,
    OBTAIN_CURRENT_USER
} from './types'
import { AsyncStorage } from 'react-native'
import { Session, User } from '../requests'

export const userEmailLogin = (userEmail, userPassword) => {
    return async function(dispatch) {
        try {
            Session.create({
                email: userEmail, 
                password: userPassword
            }).then(data => {
                dispatch({
                    type: USER_EMAIL_LOGIN_SUCCESS,
                    payload: data
                })
            }).catch((error) => {
                console.log(error)
                dispatch({
                    type: USER_EMAIL_LOGIN_FAIL
                })
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: USER_EMAIL_LOGIN_FAIL
            })
        }
    }
}

export const userEmailLogout = () => {
    return async function(dispatch) {
        try {
            Session.destroy()
                .then(data => {
                    dispatch({
                        type: USER_EMAIL_LOGOUT_SUCCESS,
                        payload: data
                    })
                }).catch((error) => {
                    console.log(error)
                    dispatch({
                        type: USER_EMAIL_LOGOUT_FAIL,
                        payload: error
                    })
                })


        } catch (error) {
            console.log(error)
            dispatch({
                type: USER_EMAIL_LOGOUT_FAIL,
                payload: error
            })
        }
    }

}

export const obtainCurrentUser = () => {
    return async function(dispatch) {
        try {
            User.current().then(data => {
                console.log(data)
                dispatch({
                    type: OBTAIN_CURRENT_USER,
                    payload: currentUser
                }).catch((error) => {
                    console.log(error)
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
}
