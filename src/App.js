import React from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import adminRouter from './modules/admin/adminRouter';
import authRouter from './modules/auth/authRouter';
import Login from './modules/pos/components/Login';
import Bienvenida from './modules/pos/pages/Bienvenida';
import PosRouter from './modules/pos/PosRouter';
import PrivateRoute from './PrivateRoute';
import {store} from './redux/store/store'



function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/bienvenida" component={Bienvenida} /> 
          <Route path="/cuenta" component={PosRouter} /> 
          <PrivateRoute path="/admin" component={adminRouter} /> 
          <Route path="/auth" component={authRouter}/>
          <Route path="/login" component={Login}/>
          <Redirect to="/bienvenida"/>
        </Switch>
      </Router> 
    </Provider>

    </>
  );
}

export default App;
