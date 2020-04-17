

const INITIAL_STATE = {
 caixas: []
}

export default function CaixaReducer(state=INITIAL_STATE,action)
{
    switch(action.type)
    {
        case "USER_FETCH_CAIXA":
            return {
                ...state,
                loading: true
            }
        case "USER_FETCH_CAIXA_SUCCESS":
            return {
                ...state,
                loading:false,
                caixas:action.payload
            }
        case "USER_FETCH_CAIXA_ERROR":
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        default:
            return state;
    }
}