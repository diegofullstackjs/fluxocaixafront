import axios from '../../service/axios'

export  function Logar(data){

    console.log(data)
    return async (dispatch) => {
        dispatch({type: "USER_AUTH"})
       
        await axios.post('auth/create/login',data)
            .then(res => {
                if(res.data.user){
                    localStorage.setItem('auth',JSON.stringify(res.data))
                    dispatch({type: "USER_AUTH_SUCCESS",payload: res.data})
                }
                if(res.data.error){
                    dispatch({
                        type: "USER_AUTH_ERROR",
                        payload: res.data.message});
                }
            }).catch(err => {
                console.log(err.data)
                dispatch({
                    type: "USER_AUTH_ERROR",
                    payload: "Ocorreu um erro"});
            });
        
    }
}

export function LocalStorageRedux() {
    console.log('chamou')
    return dispatch => {
        const data = JSON.parse(localStorage.getItem('auth'));
        if(data){
            console.log(data)
            dispatch({
                type: "IS_AUTH",
                payload: data
            })
        }else{
            dispatch({
                type: "NO_AUTH",
                payload: 'NAO AUTENTIFICADO'
            })
        }

    }
}

export function Logout()  {

    return dispatch => {
        localStorage.removeItem('auth');
        dispatch({
            type: "LOGOUT"
        })
    }
}