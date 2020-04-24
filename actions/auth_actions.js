import {
    USER_EMAIL_LOGIN,
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGIN_COMPLETE,
    USER_EMAIL_LOGOUT,
    USER_EMAIL_LOGOUT_FAIL,
    USER_EMAIL_LOGOUT_COMPLETE,
    OBTAIN_CURRENT_USER,
    OBTAIN_CURRENT_USER_COMPLETE,
    OBTAIN_CURRENT_USER_FAIL
} from './types'
import { AsyncStorage } from 'react-native'
import { Session, User } from '../requests'

export const userEmailLogin = (userEmail, userPassword) => {
    return async function(dispatch) {
        dispatch({ type: USER_EMAIL_LOGIN })
        try {
            Session.create({
                email: userEmail, 
                password: userPassword
            }).then(data => {
                // console.log(data.status)
                if (data.status === '200') {
                    dispatch({
                        type: USER_EMAIL_LOGIN_COMPLETE,
                        payload: data
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
                    // console.log(data)
                    dispatch({
                        type: USER_EMAIL_LOGOUT_COMPLETE,
                        payload: data
                    })
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
                // console.log(data)
                if (data.status === '200') {
                    dispatch({
                        type: OBTAIN_CURRENT_USER_COMPLETE,
                        payload: data
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
