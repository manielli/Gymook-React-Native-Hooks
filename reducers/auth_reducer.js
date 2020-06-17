import { 
    USER_EMAIL_LOGIN,
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGIN_COMPLETE,
    USER_EMAIL_LOGOUT, 
    USER_EMAIL_LOGOUT_COMPLETE,
    USER_EMAIL_LOGOUT_FAIL, 
    OBTAIN_CURRENT_USER,
    OBTAIN_CURRENT_USER_FAIL,
    OBTAIN_CURRENT_USER_COMPLETE,
    SIGN_IN_WITH_APPLE_LOGIN,
    SIGN_IN_WITH_APPLE_LOGIN_FAIL,
    SIGN_IN_WITH_APPLE_LOGIN_COMPLETE
} from '../actions/types'

const INITIAL_STATE = {
    currentUser: null,
    loading: false,
    status: '',
    error: '',
    token: null,
    appleSignInToken: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_EMAIL_LOGIN:
            return { 
                ...state, 
                currentUser: null,
                loading: true, 
                status: 'logging_in_user',
                error: '',
                token: null,
                appleSignInToken: null
            }
        case USER_EMAIL_LOGIN_FAIL:
            return { 
                ...state, 
                currentUser: null,
                loading: false,
                status: 'logging_in_user_failed', 
                error: action.payload,
                token: null,
                appleSignInToken: null
            }
        case USER_EMAIL_LOGIN_COMPLETE:
            return { 
                ...state, 
                currentUser: action.payload, 
                loading: false, 
                status: 'logging_in_user_completed',
                error: '',
                token: null,
                appleSignInToken: null
            }
        case USER_EMAIL_LOGOUT:
            return { 
                ...state, 
                loading: true,
                status: 'logging_out_user', 
                error: '',
                token: null,
                appleSignInToken: null
            }
        case USER_EMAIL_LOGOUT_FAIL:
            return { 
                ...state, 
                loading: false , 
                status: 'logging_out_user_failed',
                error: action.payload,
            }
        case USER_EMAIL_LOGOUT_COMPLETE:
            return { 
                ...state, 
                currentUser: null,
                loading: false, 
                status: 'logging_out_completed',
                error: '',
                token: null,
                appleSignInToken: null,
            }
        case OBTAIN_CURRENT_USER:
            return { 
                ...state, 
                currentUser: null,
                loading: true, 
                status: 'obtaining_current_user',
                error: '',
                token: null,
                appleSignInToken: null
            }
        case OBTAIN_CURRENT_USER_FAIL:
            return { 
                ...state, 
                loading: false, 
                status: 'obtaining_current_user_failed',
                error: action.payload,
                token: null,
                appleSignInToken: null
            }
        case OBTAIN_CURRENT_USER_COMPLETE:
            return { 
                ...state, 
                currentUser: action.payload, 
                loading: false, 
                status: 'obtaining_current_user_completed',
                error: '',
                token: null,
                appleSignInToken: null
            }
        case SIGN_IN_WITH_APPLE_LOGIN:
            return {
                ...state,
                currentUser: null,
                loading: true,
                status: 'sign_in_with_apple_login',
                error: '',
                token: null,
                appleSignInToken: null
            }
        case SIGN_IN_WITH_APPLE_LOGIN_FAIL:
            return {
                ...state,
                currentUser: null,
                loading: false,
                status: 'sign_in_with_apple_login_fail',
                error: action.payloard,
                token: null,
                appleSignInToken: null
            }
        case SIGN_IN_WITH_APPLE_LOGIN_COMPLETE:
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                status: 'sign_in_with_apple_login_success',
                error: '',
                token: action.payload.identityToken,
                appleSignInToken: action.payload.identityToken
            }
        default:
            return state;
    }
}