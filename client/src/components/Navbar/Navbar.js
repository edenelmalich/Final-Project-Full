import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Notifications from './Notifications';
import Account from './Account';
// import logo from img
import logo from '../../img/logo.png';
// Css imports
import './Navbar.css';
// import Link from react-router
import { NavLink, Link } from 'react-router-dom';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
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
import {
  setNotificationToggle,
  setAccountToggle
} from '../../actions/navsAction';
import { getNotificationsList } from '../../actions/notifications';
import { closeAll } from '../../actions/navsAction';

const Navbar = ({
  notificationsToggleState,
  accountToggleState,
  user,
  setAccountToggle,
  setNotificationToggle,
  NotificationsList,
  getNotificationsList
}) => {
  useEffect(() => {
    getNotificationsList();
    setNotification(
      NotificationsList.filter(update => update.readMessage === false)
    );
  }, [NotificationsList]);
  const [getNotification, setNotification] = useState([]);
  const { Name } = user;
  return (
    <div className='Navbar'>
      <div className='Pages-Wrapper'>
        <aside className='sidebar'>
          <div className='logo'>
            <Link to='/dashboard'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <div className='sidebar__AttText'>
            <ul>
              <li>
                <NavLink to='/Dashboard'>
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  <span className='IconPadding'>לוח בקרה</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/nclients'>
                  <FontAwesomeIcon icon={faAddressCard} />
                  <span className='IconPadding'>לקוח חדש</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/healthp'>
                  <FontAwesomeIcon icon={faFileAlt} />
                  <span className='IconPadding'>הצהרת בריאות</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/AllClients'>
                  <FontAwesomeIcon icon={faUsers} />
                  <span className='IconPadding'>לקוחות</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/statistics'>
                  <FontAwesomeIcon icon={faChartBar} />
                  <span className='IconPadding'>סטטיסטיקת מתאמנים</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/exeplan'>
                  <FontAwesomeIcon icon={faTasks} />
                  <span className='IconPadding'>תוכניות אימונים</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/updates'>
                  <FontAwesomeIcon icon={faEdit} />
                  <span className='IconPadding'>עדכונים</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
        <header className='header-desktop'>
          <span>
            <button
              onClick={() => setNotificationToggle(notificationsToggleState)}
              className='Notifications'
            >
              <FontAwesomeIcon icon={faBell} />
            </button>
            {getNotification.length >= 0 ? (
              <div className='Quantity'>{getNotification.length}</div>
            ) : (
              0
            )}
          </span>
          <span className='Accname'> שלום {Name}</span>

          <button
            onClick={() => setAccountToggle(accountToggleState)}
            className='icon-acc'
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </button>

          <Notifications />
          <Account />
        </header>
        <header className='header-logo' />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  setNotificationToggle: PropTypes.func,
  setAccountToggle: PropTypes.func,
  notificationsToggleState: PropTypes.bool,
  accountToggleState: PropTypes.bool
};
const mapStateToProps = state => ({
  notificationsToggleState: state.NavReducer.notificationsToggleState,
  accountToggleState: state.NavReducer.accountToggleState,
  user: state.authReducer.user,
  NotificationsList: state.NavReducer.NotificationsList
});

export default connect(mapStateToProps, {
  setNotificationToggle,
  setAccountToggle,
  getNotificationsList
})(Navbar);
