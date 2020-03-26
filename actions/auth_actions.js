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
                let dataObj = JSON.stringify(data)
                console.log(dataObj["id"])
                dispatch({
                    type: USER_EMAIL_LOGIN_SUCCESS,
                    payload: dataObj.id
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
