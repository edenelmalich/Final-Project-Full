import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Notifications from '../Navbar/Notifications';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faTachometerAlt,
  faUsers,
  faChartBar,
  faTasks,
  faUnlockAlt,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import {
  faFileAlt,
  faAddressCard,
  faEdit,
  faUser as FasUser,
  faAddressCard as FasAddressCard
} from '@fortawesome/free-regular-svg-icons';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';
import {
  setNotificationToggle,
  setNavMobileToggle,
  accountSettings
} from '../../actions/navsAction';

const MobileNav = ({
  user,
  Logout,
  setNotificationToggle,
  notificationsToggleState,
  setNavMobileToggle,
  mobileToggleState,
  loading,
  isAuth,
  MenuState,
  Account_Mobile,
  accountSettings
}) => {
  // Auth links
  const AuthLinks = () => (
    <Fragment>
      <Link
        to='/Dashboard'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faTachometerAlt} /> לוח בקרה
      </Link>
      <Link
        to='/Nclients'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faAddressCard} /> לקוח חדש
      </Link>
      <Link
        to='/HealthP'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faFileAlt} /> הצהרת בריאות
      </Link>
      <Link
        to='/AllClients'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faUsers} /> לקוחות
      </Link>
      <Link
        to='/Statistics'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faChartBar} /> סטטיסטיקת מתאמנים
      </Link>
      <Link
        to='/ExePlan'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faTasks} /> תוכניות אימונים
      </Link>
      <Link
        to='/Updates'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faEdit} /> עדכונים
      </Link>
    </Fragment>
  );
  // Guest Links
  const GuestLinks = () => (
    <Fragment>
      <Link
        to='/loginApp'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={FasUser} /> התחברות
      </Link>
      <Link
        to='/registerApp'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={FasAddressCard} /> הרשמה
      </Link>
      <Link
        to='/forgotPass'
        id='a-Padding'
        onClick={() => setNavMobileToggle(mobileToggleState)}
      >
        <FontAwesomeIcon icon={faUnlockAlt} /> איפוס סיסמה
      </Link>
    </Fragment>
  );
  // Account Links
  const AccountLinks = () => (
    <Fragment>
      <Link
        to='/PersonalDetails'
        onClick={() => setNavMobileToggle(mobileToggleState)}
        id='a-Padding'
      >
        פרטים אישיים
      </Link>
      <Link
        to='/ChangePass'
        onClick={() => setNavMobileToggle(mobileToggleState)}
        id='a-Padding'
      >
        שינוי סיסמה
      </Link>
      <Link
        to='/ChangeEmail'
        onClick={() => setNavMobileToggle(mobileToggleState)}
        id='a-Padding'
      >
        שינוי דואר אלקטרוני
      </Link>
      <Link to='/' onClick={() => logout()} id='a-Padding'>
        התנתקות
      </Link>
    </Fragment>
  );
  // Functions
  const logout = () => {
    Logout();
    setNavMobileToggle(mobileToggleState);
  };

  const { Name } = user;
  return (
    <div className='MobileNav'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          {!loading && isAuth ? (
            <Link to='/Dashboard'>
              <img src={logo} alt='Mobile logo' id='MobileNav-img' />
            </Link>
          ) : (
            <Link to='/'>
              <img src={logo} alt='Mobile logo' id='MobileNav-img' />
            </Link>
          )}
        </Navbar.Brand>
        {!loading && isAuth ? (
          <span>
            <span className='Notifications-position'>
              <div className='Quantity-Mobile'>0</div>
              <button
                onClick={() => setNotificationToggle(notificationsToggleState)}
                className='Notifications-mobile'
              >
                <FontAwesomeIcon icon={faBell} />
              </button>
            </span>
            <Notifications />
          </span>
        ) : null}
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => setNavMobileToggle(mobileToggleState)}
        />
        <Navbar.Collapse in={mobileToggleState} id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {!loading && isAuth ? (
              <span>
                <span className='Nav-account-name '>שלום {Name}</span>
                <FontAwesomeIcon
                  onClick={() => accountSettings(Account_Mobile)}
                  icon={faAngleDown}
                />
                <Collapse isOpen={Account_Mobile}>
                  <div className='Nav-Setting'>הגדרות</div>
                  <AccountLinks />
                </Collapse>
              </span>
            ) : null}

            {!loading && isAuth ? (
              <Collapse isOpen={MenuState}>
                <AuthLinks />
              </Collapse>
            ) : (
              <GuestLinks />
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
MobileNav.propTypes = {
  user: PropTypes.object,
  Logout: PropTypes.func.isRequired,
  setNotificationToggle: PropTypes.func,
  notificationsToggleState: PropTypes.bool,
  MobileNav: PropTypes.bool,
  loading: PropTypes.bool,
  isAuth: PropTypes.bool,
  MenuState: PropTypes.bool,
  Account_Mobile: PropTypes.bool,
  accountSettings: PropTypes.func
};
const mapStateToProps = state => ({
  user: state.authReducer.user,
  notificationsToggleState: state.NavReducer.notificationsToggleState,
  mobileToggleState: state.NavReducer.mobileToggleState,
  loading: state.authReducer.loading,
  isAuth: state.authReducer.isAuth,
  MenuState: state.NavReducer.MenuState,
  Account_Mobile: state.NavReducer.Account_Mobile
});
export default connect(mapStateToProps, {
  Logout,
  setNotificationToggle,
  setNavMobileToggle,
  accountSettings
})(MobileNav);
