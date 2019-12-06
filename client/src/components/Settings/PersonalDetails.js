import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import './Settings.css';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
import SettingsNav from '../Mobile/SettingsNav';
// Redux
import { connect } from 'react-redux';
import { Logout, checkUser } from '../../actions/authAction';
import { closeAll } from '../../actions/navsAction';

const PersonalDetails = ({ Logout, user, closeAll }) => {
  useEffect(() => {
    closeAll();
    checkUser();
  }, []);
  return (
    <div className='Settings'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileDetails user={user} />
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
                        פרטים אישיים
                        <div className='userDetails-text'>
                          {user.Name}
                          <div className='userDetails-text'>{user.email}</div>
                        </div>
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
const MobileDetails = ({ user }) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>הגדרות</h2>
      <SettingsNav />
      <div className='Mobile-Settings'>
        <Card bg='light' style={{ width: '100%' }}>
          <div className='Mobile-Page-Header'>
            פרטים אישיים
            <div className='userDetails-text'>
              {user.Name}
              <div className='userDetails-text'>{user.email}</div>
            </div>
          </div>
        </Card>
      </div>
    </main>
    <MobileFooter />
  </div>
);
PersonalDetails.propTypes = {
  user: PropTypes.object,
  Logout: PropTypes.func.isRequired,
  closeAll: PropTypes.func.isRequired,
  checkUser: PropTypes.func
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps, { Logout, closeAll, checkUser })(
  PersonalDetails
);
