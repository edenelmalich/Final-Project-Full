import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Notifications from '../Navbar/Notifications';
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
        <div className='Quantity-Mobile'>0</div>
        <button
          onClick={() => SetNotification(NotificationsSelected)}
          className='Notifications'
        >
          <FontAwesomeIcon icon={faBell} />
        </button>

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
              <NavDropdown.Item href='/PersonalDetails'>
                פרטים אישיים
              </NavDropdown.Item>
              <NavDropdown.Item href='/changePass'>
                שינוי סיסמה
              </NavDropdown.Item>
              <NavDropdown.Item href='/ChangeEmail'>
                שינוי דואר אלקטרוני
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/' onClick={() => Logout()}>
                התנתקות
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Dashboard'>לוח בקרה</Nav.Link>
            <Nav.Link href='/nclients'>לקוח חדש</Nav.Link>
            <Nav.Link href='/healthp'>הצהרת בריאות</Nav.Link>
            <Nav.Link href='/AllClients'>לקוחות</Nav.Link>
            <Nav.Link href='/statistics'>סטטיסטיקת מתאמנים</Nav.Link>
            <Nav.Link href='/exeplan'>תוכניות אימונים</Nav.Link>
            <Nav.Link href='/updates'>עדכונים</Nav.Link>
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
export default connect(mapStateToProps, { Logout, SetNotification, SetNav })(
  MobileNav
);
