import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/CssFont.css';
// Components
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import AllClients from './components/Clients/AllClients';
import HealthP from './components/HealthP/HealthP';
import Nclients from './components/NewClients/NewClients';
import ExePlan from './components/ExePlan/ExePlan';
import LoginApp from './components/MainPage/LoginApp';
import BuildPlan from './components/BuildPlan/BuildPlan';
import Registar from './components/MainPage/Register';
import ForgotPass from './components/MainPage/ForgotPass';
import Updates from './components/Updates/Updates';
import NotificationsPage from './components/Notifications/NotificationsPage';
import MainPage from './components/MainPage/MainPage';
// Settings
import PersonalDetails from './components/Settings/PersonalDetails';
import ChangePass from './components/Settings/ChangePass';
import ChangeEmail from './components/Settings/ChangeEmail';
// Redux import

import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';
import store from './store';
import { CheckUser } from './actions/authAction';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(CheckUser());
  }, []);
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <div id='App-flex'>
            <Switch>
              <Route path='/' component={MainPage} exact />
              <Route path='/registarApp' component={Registar} />
              <Route path='/LoginApp' component={LoginApp} />
              <Route path='/Dashboard' component={Dashboard} />
              <Route path='/AllClients' component={AllClients} />
              <Route path='/statistics' component={Statistics} />
              <Route path='/healthp' component={HealthP} />
              <Route path='/nclients' component={Nclients} />
              <Route path='/exeplan' component={ExePlan} />
              <Route path='/buildPlan' component={BuildPlan} />
              <Route path='/notifications' component={NotificationsPage} />
              <Route path='/updates' component={Updates} />

              <Route path='/forgotPass' component={ForgotPass} />
              {/* Settings Routes */}
              <Route path='/personalDetails' component={PersonalDetails} />
              <Route path='/changePass' component={ChangePass} />
              <Route path='/changeEmail' component={ChangeEmail} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
