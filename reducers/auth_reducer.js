import { 
    USER_EMAIL_LOGIN_SUCCESS, 
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGOUT_SUCCESS,
    USER_EMAIL_LOGOUT_FAIL 
} from '../actions/types'

export default function (state={}, action) {
    switch(action.type) {
        case USER_EMAIL_LOGIN_SUCCESS:
            return { token: action.payload };
        case USER_EMAIL_LOGIN_FAIL:
            return { token: null };
        case USER_EMAIL_LOGOUT_SUCCESS:
            return { token: null };
        case USER_EMAIL_LOGOUT_FAIL:
            return { token: action.payload }
        default:
            return state;
    }
}