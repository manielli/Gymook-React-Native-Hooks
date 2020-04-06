import { 
    USER_EMAIL_LOGIN_SUCCESS, 
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGOUT_SUCCESS,
    USER_EMAIL_LOGOUT_FAIL, 
    OBTAIN_CURRENT_USER
} from '../actions/types'

const INITIAL_STATE = {
    currentUser: null,
    loading: false,
    error: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_EMAIL_LOGIN_SUCCESS:
            return { ...state, currentUser: action.payload };
        case USER_EMAIL_LOGIN_FAIL:
            return { ...state, error: action.payload };
        case USER_EMAIL_LOGOUT_SUCCESS:
            return { ...state, currentUser: action.payload };
        case USER_EMAIL_LOGOUT_FAIL:
            return { ...state, error: action.payload };
        case OBTAIN_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        default:
            return state;
    }
}