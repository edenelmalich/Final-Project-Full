import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import Alert from '../layout/Alert';

import { NavLink, Link } from 'react-router-dom';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Bootstrap imports
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
import { resetEmail } from '../../actions/resetEmail';
const ChangeEmail = ({ Logout, closeAll, setAlert, resetEmail, user }) => {
  // ComponentWillMount
  useEffect(() => {
    closeAll();
  }, []);
  // useState
  const [getData, setData] = useState({
    newEmail: '',
    ReNewEmail: ''
  });
  const { newEmail, ReNewEmail } = getData;
  const { _id } = user;
  // Functions
  const onSubmit = e => {
    e.preventDefault();
    if (newEmail !== ReNewEmail) {
      setAlert('דואר אלקטרוני לא תואם', 'danger');
    } else {
      resetEmail(_id, newEmail);
    }
    RestForm();
  };
  const onChange = e => {
    setData({ ...getData, [e.target.name]: e.target.value });
  };
  const RestForm = () => {
    setData({ ...getData, newEmail: '', ReNewEmail: '' });
  };
  return (
    <div className='Settings'>
      <MediaQuery maxDeviceWidth={900}>
        <MobileSettingEmail
          onChange={onChange}
          onSubmit={onSubmit}
          newEmail={newEmail}
          ReNewEmail={ReNewEmail}
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
                      <div className='Settings-Page-Header'>
                        שינוי דואר אלקטרוני
                      </div>
                      <FontAwesomeIcon
                        className='Main-Settings-Icon'
                        icon={faEnvelope}
                      />
                      <div className='Form-padding'>
                        <form
                          className='Form-Settings'
                          onSubmit={e => onSubmit(e)}
                        >
                          <label> דואר אלקטרוני חדש </label>
                          <input
                            type='email'
                            name='newEmail'
                            value={newEmail}
                            onChange={e => onChange(e)}
                            placeholder='הכנס דואר אלקטרוני חדש'
                          />
                          <label>אימות דואר אלקטרוני</label>
                          <input
                            type='email'
                            name='ReNewEmail'
                            value={ReNewEmail}
                            onChange={e => onChange(e)}
                            placeholder='אימות דואר אלקטרוני'
                          />
                          <input type='submit' value='שנה דואר אלקטרוני' />
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
const MobileSettingEmail = ({ onChange, onSubmit, newEmail, ReNewEmail }) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>הגדרות</h2>
      <SettingsNav />
      <div className='Mobile-Settings'>
        <Card bg='light' style={{ width: '100%' }}>
          <div className='Mobile-Page-Header'>שינוי דואר אלקטרוני</div>
          <FontAwesomeIcon className='Main-Settings-Icon' icon={faEnvelope} />

          <form className='Form-Settings' onSubmit={e => onSubmit(e)}>
            <label> דואר אלקטרוני חדש </label>
            <input
              type='email'
              name='newEmail'
              value={newEmail}
              onChange={e => onChange(e)}
              placeholder='הכנס דואר אלקטרוני חדש'
            />
            <label>אימות דואר אלקטרוני</label>
            <input
              type='email'
              name='ReNewEmail'
              value={ReNewEmail}
              onChange={e => onChange(e)}
              placeholder='אימות דואר אלקטרוני'
            />
            <div className='Main-Padding'></div>
            <Alert />
            <input type='submit' value='שנה דואר אלקטרוני' />
          </form>
        </Card>
      </div>
    </main>
    <MobileFooter />
  </div>
);
ChangeEmail.propTypes = {
  Logout: PropTypes.func.isRequired,
  closeAll: PropTypes.func.isRequired,
  user: PropTypes.object,
  setAlert: PropTypes.func,
  resetEmail: PropTypes.func
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps, {
  Logout,
  closeAll,
  setAlert,
  resetEmail
})(ChangeEmail);
