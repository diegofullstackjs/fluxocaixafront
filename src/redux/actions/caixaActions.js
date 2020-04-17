
import axios from '../../service/axios'

export function showCaixas(token){
    return async dispatch => {
        dispatch({type: "USER_FETCH_CAIXA"})

      await axios.get('/painel/caixa/list',{
            headers:{
              "access-token" : `${token}`  
            }
        }).then(res => {
            if(res.data){
                dispatch({
                    type: "USER_FETCH_CAIXA_SUCCESS",
                    payload: res.data
                });
            }
        }).catch(err => {
            dispatch({
                type: "USER_FETCH_CAIXA_ERROR",
                message: "Ocorreu um erro"
            })
        })
    }
}