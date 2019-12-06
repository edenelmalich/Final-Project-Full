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
import Register from './components/MainPage/Register';
import ForgotPass from './components/MainPage/ForgotPass';
import Updates from './components/Updates/Updates';
import NotificationsPage from './components/Notifications/NotificationsPage';
import MainPage from './components/MainPage/MainPage';
// Mobile imports
import MobileNav from './components/Mobile/MobileNav';
import MediaQuery from 'react-responsive';
// Settings
import PersonalDetails from './components/Settings/PersonalDetails';
import ChangePass from './components/Settings/ChangePass';
import ChangeEmail from './components/Settings/ChangeEmail';
// Redux import

import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';
import store from './store';
import { checkUser } from './actions/authAction';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(checkUser());
  }, []);
  // useState

  return (
    <Provider store={store}>
      <Router>
        <MediaQuery maxDeviceWidth={900}>
          <div className='Mobile'>
            <MobileNav />
          </div>
        </MediaQuery>
        <div className='App'>
          <div id='App-flex'>
            <Switch>
              <Route path='/' component={MainPage} exact />
              <Route path='/registerApp' component={Register} />
              <Route path='/LoginApp' component={LoginApp} />
              <Route path='/Dashboard' component={Dashboard} />
              <Route path='/AllClients' component={AllClients} />
              <Route path='/Statistics' component={Statistics} />
              <Route path='/HealthP' component={HealthP} />
              <Route path='/Nclients' component={Nclients} />
              <Route path='/ExePlan' component={ExePlan} />
              <Route path='/BuildPlan' component={BuildPlan} />
              <Route path='/NotificationsPage' component={NotificationsPage} />
              <Route path='/Updates' component={Updates} />

              <Route path='/forgotPass' component={ForgotPass} />
              {/* Settings Routes */}

              <Route path='/PersonalDetails' component={PersonalDetails} />
              <Route path='/ChangePass' component={ChangePass} />
              <Route path='/ChangeEmail' component={ChangeEmail} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
