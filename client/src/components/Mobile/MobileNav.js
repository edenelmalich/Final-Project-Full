import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import {
  faFileAlt,
  faAddressCard,
  faEdit
} from '@fortawesome/free-regular-svg-icons';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';
import { SetNotification, SetNav } from '../../actions/NavAction';

const MobileNav = ({
  user,
  Logout,
  SetNotification,
  NotificationsSelected,
  SetNav,
  MobileNav
}) => {
  const { Name } = user;
  return (
    <div className='MobileNav'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          <Link to='/Dashboard'>
            <img src={logo} alt='Mobile logo' id='MobileNav-img' />
          </Link>
        </Navbar.Brand>
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

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => SetNav(MobileNav)}
        />
        <Navbar.Collapse id='basic-navbar-nav' in={MobileNav}>
          <Nav className='mr-auto'>
            <NavDropdown title={`שלום ${Name}`} id='basic-nav-dropdown'>
              <NavDropdown.Item className='Nav-Setting'>
                הגדרות
              </NavDropdown.Item>
              <Link to='/PersonalDetails'>פרטים אישיים</Link>
              <Link to='/changePass'>שינוי סיסמה</Link>
              <Link to='/ChangeEmail'>שינוי דואר אלקטרוני</Link>
              <NavDropdown.Divider />
              <Link to='/' onClick={() => Logout()}>
                התנתקות
              </Link>
            </NavDropdown>
            <Link to='/Dashboard' onClick={() => SetNav(true)}>
              <FontAwesomeIcon icon={faTachometerAlt} /> לוח בקרה
            </Link>
            <Link to='/nclients' onClick={() => SetNav(true)}>
              <FontAwesomeIcon icon={faAddressCard} /> לקוח חדש
            </Link>
            <Link to='/healthp' onClick={() => SetNav(true)}>
              <FontAwesomeIcon icon={faFileAlt} /> הצהרת בריאות
            </Link>
            <Link to='/AllClients' onClick={() => SetNav(true)}>
              <FontAwesomeIcon icon={faUsers} /> לקוחות
            </Link>
            <Link to='/statistics' onClick={() => SetNav(true)}>
              <FontAwesomeIcon icon={faChartBar} /> סטטיסטיקת מתאמנים
            </Link>
            <Link to='/exeplan' onClick={() => SetNav(true)}>
              <FontAwesomeIcon icon={faTasks} /> תוכניות אימונים
            </Link>
            <Link to='/updates' onClick={() => SetNav(true)}>
              <FontAwesomeIcon icon={faEdit} /> עדכונים
            </Link>
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
  MobileNav: PropTypes.bool
};
const mapStateToProps = state => ({
  user: state.authReducer.user,
  NotificationsSelected: state.NavReducer.NotificationsSelected,
  MobileNav: state.NavReducer.MobileNav
});
export default connect(mapStateToProps, {
  Logout,
  SetNotification,
  SetNav
})(MobileNav);
