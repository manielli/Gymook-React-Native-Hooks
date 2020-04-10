import {
    USER_EMAIL_LOGIN_SUCCESS,
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGOUT_SUCCESS,
    USER_EMAIL_LOGOUT_FAIL,
    OBTAIN_CURRENT_USER,
    OBTAIN_CURRENT_USER_SUCCESS,
    OBTAIN_CURRENT_USER_FAILURE
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
                // console.log(data)
                dispatch({
                    type: USER_EMAIL_LOGIN_SUCCESS,
                    payload: data
                })
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
        try {
            Session.destroy()
                .then(data => {
                    // console.log(data)
                    dispatch({
                        type: USER_EMAIL_LOGOUT_SUCCESS,
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
        try {
            User.current().then(data => {
                // console.log(data)
                dispatch(obtainCurrentUserSuccess(data))
                return {
                    type: OBTAIN_CURRENT_USER,
                    payload: data
                }
            }).catch((error) => {
                dispatch(obtainCurrentUserFailure(error))
            })
        } catch (error) {
            dispatch(obtainCurrentUserFailure(error))
        }
    }
}

export const obtainCurrentUserSuccess = currentUser => {
    return {
        type: OBTAIN_CURRENT_USER_SUCCESS,
        payload: currentUser
    }
}

export const obtainCurrentUserFailure = error => {
    return {
        type: OBTAIN_CURRENT_USER_FAILURE,
        payload: error
    }
}
