import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Logon from './pages/Login'
import Painel from './pages/Painel'
function Routes(){
    return(
      <Switch>
           <Route path="/" exact component={Logon} />
           <Route path="/login" exact component={Logon} />
           <Route path="/painel" component={Painel} />
      </Switch>
    );
}

export default Routes;