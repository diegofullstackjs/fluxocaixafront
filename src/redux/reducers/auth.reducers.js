

const INITAL_STATE = {
    is_authenticated: false,
    user: [],
    message: ''
}

export default function AuthReducer(state=INITAL_STATE,action){
    switch(action.type)
    {
        case "IS_AUTH" :
            return {
                ...state,
                user: action.payload,
                is_authenticated: true,
            }
        case "NO_AUTH":
            return{
                is_authenticated: false,
                message: action.payload
            }
        case "USER_AUTH":
            return {
                ...state,
                loading: true
            }
        case "USER_AUTH_SUCCESS":
            return {
                ...state,
                loading:false,
                is_authenticated: true,
                user: action.payload,
                error: ''
            }
        case "USER_AUTH_ERROR":
            return {
                ...state,
                loading:false,
                error: action.payload,
                is_authenticated: false,
                user: ''
            }
        case "LOGOUT":
            return{
                ...state,
                is_authenticated:false
            }
            default:
                return state
    }
}