import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap'
import {connect, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {showCaixas} from '../redux/actions/caixaActions';
import ListaCaixa from './components/ListCaixa'
function Painel({user,caixas}) {
    const uid = user.user;
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        dispatch(showCaixas(uid.token))
    },[dispatch,uid])
    useEffect(() => {
        if(!user.is_authenticated)   
        {
            history.push('/login')
        } 
    },[history,user])

  return (
    <Container>
        {JSON.stringify(caixas)}
    </Container>
  );
}
const mapStateToProps = state => ({
  user: state.usuario,
  caixas: state.caixa
});
export default connect(mapStateToProps)(Painel)
