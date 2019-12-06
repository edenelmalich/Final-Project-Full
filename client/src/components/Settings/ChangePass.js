import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import Alert from '../layout/Alert';
import { NavLink, Link } from 'react-router-dom';

import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
import SettingsNav from '../Mobile/SettingsNav';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';
import { closeAll } from '../../actions/navsAction';
import { setAlert } from '../../actions/alertAction';
import { resetPassword } from '../../actions/authAction';

const ChangePass = ({ Logout, closeAll, user, resetPassword, setAlert }) => {
  useEffect(() => {
    closeAll();
  }, []);
  const { email } = user;
  // useState
  const [getData, setData] = useState({
    Password: '',
    RePassword: ''
  });
  const [typeState, setType] = useState(false);
  const { Password, RePassword } = getData;
  // Functions
  const onChange = e => {
    setData({ ...getData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (Password !== RePassword) {
      setAlert('סיסמאות לא תואמות', 'danger');
    } else {
      resetPassword(Password, email);
    }
    ResetForm();
  };
  const ResetForm = () => {
    setData({ ...getData, Password: '', RePassword: '' });
  };
  return (
    <div className='Settings'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileSettingPass
          onSubmit={onSubmit}
          onChange={onChange}
          Password={Password}
          RePassword={RePassword}
          setType={setType}
          typeState={typeState}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>הגדרות</h2>

                  <div className='Noti-Padding'></div>

                  <Card bg='light' style={{ width: '50rem' }}>
                    <div className='Settings-Container'>
                      <div className='Settings-Page-Header'>שינוי סיסמה</div>
                      <FontAwesomeIcon
                        className='Main-Settings-Icon'
                        icon={faLock}
                      />
                      <div className='Form-padding'>
                        <form
                          className='Form-Settings'
                          onSubmit={e => onSubmit(e)}
                        >
                          <label>הכנס סיסמה חדשה</label>
                          <input
                            type={typeState ? 'text' : 'password'}
                            name='Password'
                            value={Password}
                            onChange={e => onChange(e)}
                            placeholder='הכנס סיסמא חדשה'
                          />
                          <label>אימות סיסמה</label>
                          <input
                            type={typeState ? 'text' : 'password'}
                            name='RePassword'
                            value={RePassword}
                            onChange={e => onChange(e)}
                            placeholder='אימות סיסמא'
                          />
                          <label>הצג סיסמאות</label>
                          <input
                            type='checkbox'
                            onClick={() => setType(!typeState)}
                          />
                          <input type='submit' value='שנה סיסמא' />
                        </form>
                      </div>
                    </div>
                    <div className='Settings-Header'></div>
                    <div className='Setting-Sidebar'>
                      <div className='Settings-logo'>
                        <div className='Logo-Text'>הגדרות</div>
                      </div>

                      <NavLink to='/PersonalDetails' className='Settings-nav'>
                        פרטים אישיים
                      </NavLink>

                      <NavLink to='/ChangePass' className='Settings-nav'>
                        שינוי סיסמא
                      </NavLink>
                      <NavLink to='/ChangeEmail' className='Settings-nav'>
                        שינוי דואר אלקטרוני
                      </NavLink>
                      <Link
                        to='/'
                        onClick={() => Logout()}
                        className='Settings-Logout'
                      >
                        התנתקות
                      </Link>
                    </div>
                    <div className='Alert-Position'>
                      <Alert />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </main>
          <AppFooter />
        </div>
      </MediaQuery>
    </div>
  );
};
const MobileSettingPass = ({
  onSubmit,
  onChange,
  Password,
  RePassword,
  setType,
  typeState
}) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>הגדרות</h2>
      <SettingsNav />
      <div className='Mobile-Settings'>
        <Card bg='light' style={{ width: '100%' }}>
          <div className='Mobile-Page-Header'>שינוי סיסמה</div>
          <FontAwesomeIcon className='Main-Settings-Icon' icon={faLock} />

          <form className='Form-Settings' onSubmit={e => onSubmit(e)}>
            <label>הכנס סיסמה חדשה</label>
            <input
              type={typeState ? 'text' : 'password'}
              name='Password'
              value={Password}
              onChange={e => onChange(e)}
              placeholder='הכנס סיסמא חדשה'
            />
            <label>אימות סיסמה</label>
            <input
              type={typeState ? 'text' : 'password'}
              name='RePassword'
              value={RePassword}
              onChange={e => onChange(e)}
              placeholder='אימות סיסמא'
            />
            <label>הצג סיסמאות</label>
            <input type='checkbox' onClick={() => setType(!typeState)} />
            <div className='Main-Padding'></div>
            <Alert />
            <input type='submit' value='שנה סיסמא' />
          </form>
        </Card>
      </div>
    </main>
    <MobileFooter />
  </div>
);
ChangePass.propTypes = {
  Logout: PropTypes.func.isRequired,
  closeAll: PropTypes.func.isRequired,
  user: PropTypes.object,
  setAlert: PropTypes.func,
  resetPassword: PropTypes.func
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps, {
  Logout,
  closeAll,
  setAlert,
  resetPassword
})(ChangePass);
