import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import AppFooter from '../AppFooter';
import PropTypes from 'prop-types';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
import SettingsNav from '../Mobile/SettingsNav';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';
import { closeAll } from '../../actions/NavAction';

const ChangePass = ({ Logout, closeAll }) => {
  useEffect(() => {
    closeAll();
  }, []);
  return (
    <div className='Settings'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileSettingPass />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
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
                        <form className='Form-Settings'>
                          <label>הכנס סיסמה חדשה</label>
                          <input
                            type='password'
                            placeholder='הכנס סיסמא חדשה'
                          />
                          <label>אימות סיסמה</label>
                          <input type='password' placeholder='אימות סיסמא' />
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
const MobileSettingPass = () => (
  <div className='Mobile'>
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>הגדרות</h2>
      <SettingsNav />
      <div className='Mobile-Settings'>
        <Card bg='light' style={{ width: '100%' }}>
          <div className='Mobile-Page-Header'>שינוי סיסמה</div>
          <FontAwesomeIcon className='Main-Settings-Icon' icon={faLock} />

          <form className='Form-Settings'>
            <label>הכנס סיסמה חדשה</label>
            <input type='password' placeholder='הכנס סיסמא חדשה' />
            <label>אימות סיסמה</label>
            <input type='password' placeholder='אימות סיסמא' />
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
  closeAll: PropTypes.func.isRequired
};
export default connect(
  null,
  { Logout, closeAll }
)(ChangePass);
