import React, { useState, Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
import { SetNotification, SetNav } from '../../actions/NavAction';
import { AccountSettings } from '../../actions/NavAction';

const MobileNav = ({
  user,
  Logout,
  SetNotification,
  NotificationsSelected,
  SetNav,
  MobileNav,
  loading,
  isAuth,
  MenuState,
  Account_Mobile,
  AccountSettings
}) => {
  // Auth links
  const AuthLinks = () => (
    <Fragment>
      <Link to='/Dashboard' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faTachometerAlt} /> לוח בקרה
      </Link>
      <Link to='/Nclients' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faAddressCard} /> לקוח חדש
      </Link>
      <Link to='/HealthP' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faFileAlt} /> הצהרת בריאות
      </Link>
      <Link to='/AllClients' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faUsers} /> לקוחות
      </Link>
      <Link to='/Statistics' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faChartBar} /> סטטיסטיקת מתאמנים
      </Link>
      <Link to='/ExePlan' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faTasks} /> תוכניות אימונים
      </Link>
      <Link to='/Updates' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faEdit} /> עדכונים
      </Link>
    </Fragment>
  );
  // Guest Links
  const GuestLinks = () => (
    <Fragment>
      <Link to='/loginApp' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={FasUser} /> התחברות
      </Link>
      <Link to='/registerApp' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={FasAddressCard} /> הרשמה
      </Link>
      <Link to='/forgotPass' id='a-Padding' onClick={() => SetNav(MobileNav)}>
        <FontAwesomeIcon icon={faUnlockAlt} /> איפוס סיסמה
      </Link>
    </Fragment>
  );
  // Account Links
  const AccountLinks = () => (
    <Fragment>
      <Link
        to='/PersonalDetails'
        onClick={() => SetNav(MobileNav)}
        id='a-Padding'
      >
        פרטים אישיים
      </Link>
      <Link to='/ChangePass' onClick={() => SetNav(MobileNav)} id='a-Padding'>
        שינוי סיסמה
      </Link>
      <Link to='/ChangeEmail' onClick={() => SetNav(MobileNav)} id='a-Padding'>
        שינוי דואר אלקטרוני
      </Link>
      <Link to='/' onClick={() => logout()}>
        התנתקות
      </Link>
    </Fragment>
  );
  // Functions
  const logout = () => {
    Logout();
    SetNav(MobileNav);
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
                onClick={() => SetNotification(NotificationsSelected)}
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
          onClick={() => SetNav(MobileNav)}
        />
        <Navbar.Collapse in={MobileNav} id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {!loading && isAuth ? (
              <span>
                <span className='Nav-account-name '>שלום {Name}</span>
                <FontAwesomeIcon
                  onClick={() => AccountSettings(Account_Mobile)}
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
  SetNotification: PropTypes.func,
  NotificationsSelected: PropTypes.bool,
  MobileNav: PropTypes.bool,
  loading: PropTypes.bool,
  isAuth: PropTypes.bool,
  MenuState: PropTypes.bool,
  Account_Mobile: PropTypes.bool,
  AccountSettings: PropTypes.func
};
const mapStateToProps = state => ({
  user: state.authReducer.user,
  NotificationsSelected: state.NavReducer.NotificationsSelected,
  MobileNav: state.NavReducer.MobileNav,
  loading: state.authReducer.loading,
  isAuth: state.authReducer.isAuth,
  MenuState: state.NavReducer.MenuState,
  Account_Mobile: state.NavReducer.Account_Mobile
});
export default connect(mapStateToProps, {
  Logout,
  SetNotification,
  SetNav,
  AccountSettings
})(MobileNav);
