import { 
    USER_EMAIL_LOGIN,
    USER_EMAIL_LOGIN_FAIL,
    USER_EMAIL_LOGIN_SUCCESS,
    USER_EMAIL_LOGOUT, 
    USER_EMAIL_LOGOUT_SUCCESS,
    USER_EMAIL_LOGOUT_FAIL, 
    OBTAIN_CURRENT_USER,
    OBTAIN_CURRENT_USER_FAIL,
    OBTAIN_CURRENT_USER_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
    currentUser: null,
    loading: false,
    status: '',
    error: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_EMAIL_LOGIN:
            return { 
                ...state, 
                currentUser: null,
                loading: true, 
                status: 'logging_in_user',
                error: '' 
            }
        case USER_EMAIL_LOGIN_FAIL:
            return { 
                ...state, 
                currentUser: null,
                loading: false,
                status: 'logging_in_user_failed', 
                error: action.payload 
            }
        case USER_EMAIL_LOGIN_SUCCESS:
            return { 
                ...state, 
                currentUser: action.payload, 
                loading: false, 
                status: 'logging_in_user_succeeded',
                error: ''
            }
        case USER_EMAIL_LOGOUT:
            return { 
                ...state, 
                loading: true,
                status: 'logging_out_user', 
                error: '' 
            }
        case USER_EMAIL_LOGOUT_FAIL:
            return { 
                ...state, 
                loading: false , 
                status: 'logging_out_user_failed',
                error: action.payload 
            }
        case USER_EMAIL_LOGOUT_SUCCESS:
            return { 
                ...state, 
                currentUser: null,
                loading: false, 
                status: 'logging_out_succeeded',
                error: ''
            }
        case OBTAIN_CURRENT_USER:
            return { 
                ...state, 
                currentUser: null,
                loading: true, 
                status: 'obtaining_current_user',
                error: ''
            }
        case OBTAIN_CURRENT_USER_FAIL:
            return { 
                ...state, 
                loading: false, 
                status: 'obtaining_current_user_failed',
                error: action.payload,
            }
        case OBTAIN_CURRENT_USER_SUCCESS:
            return { 
                ...state, 
                currentUser: action.payload, 
                loading: false, 
                status: 'obtaining_current_user_succeeded',
                error: ''
            }
        default:
            return state;
    }
}