import {createStore,combineReducers,applyMiddleware} from 'redux';
import AuthReducer from '../reducers/auth.reducers';
import CaixaReducer from '../reducers/caixa.reducers';
import thunk from 'redux-thunk'
export default createStore(
    combineReducers({
        usuario: AuthReducer,
        caixa: CaixaReducer
    }),
    applyMiddleware(thunk)
);