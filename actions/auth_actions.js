import {
    USER_EMAIL_LOGIN_SUCCESS,
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGOUT_SUCCESS,
    USER_EMAIL_LOGOUT_FAIL
} from './types'
import { AsyncStorage } from 'react-native'
import { Session } from '../requests'

export const userEmailLoginSuccess = (userEmail, userPassword) => {
    return async function(dispatch) {
        try {
            Session.create({
                email: userEmail, 
                password: userPassword
            }).then(data => {
                console.log(data)
                dispatch({
                    type: USER_EMAIL_LOGIN_SUCCESS,
                    payload: sessionUserData 
                })
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const userEmailLoginFail = () => {

}

export const userEmailLogoutSuccess = () => {

}

export const userEmailLogoutFail = () => {

}
