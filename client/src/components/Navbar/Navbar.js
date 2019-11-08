import React from 'react';
import logo from '../../img/logo.png';
import PropTypes from 'prop-types';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
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
import { SetNotification, SetAccount } from '../../actions/NavAction';

import { Logout } from '../../actions/authAction';

const Navbar = ({
  NotificationsSelected,
  AccountSelected,
  Logout,
  user,
  SetAccount,
  SetNotification
}) => {
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
          <div className='Object-Att'>
            <button
              onClick={() => SetNotification(NotificationsSelected)}
              className='Notifications'
            >
              <FontAwesomeIcon icon={faBell} />
            </button>
            <div className='Accname'> שלום {Name}</div>
            <button
              onClick={() => SetAccount(AccountSelected)}
              className='icon-acc'
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
          {NotificationsSelected ? (
            <NotiBox SetNotification={SetNotification} />
          ) : null}
          {AccountSelected ? (
            <Accbox SetAccount={SetAccount} Logout={Logout} />
          ) : null}
        </header>
        <header className='header-logo' />
      </div>
    </div>
  );
};
//This Box will show the settings
const Accbox = ({ Logout }) => (
  <div className='AccBox'>
    <div className='Settings-Title'>הגדרות</div>
    <Link to='/PersonalDetails' className='Settings-item'>
      פרטים אישיים
    </Link>
    <Link to='/changePass' className='Settings-item'>
      שינוי סיסמא
    </Link>
    <Link to='/ChangeEmail' className='Settings-item'>
      שינוי דואר אלקטרוני
    </Link>
    <Link to='/' onClick={() => Logout()} className='Logout-item'>
      התנתקות
    </Link>
  </div>
);
//This Box will show the notifications
const NotiBox = () => (
  <div className='NotiBox'>
    <div className='Notification-Title'>יש לך 2 התראות חדשות</div>
    <div className='Notification-item'>התקבלה הצהרת בריאות חדשה</div>
    <div className='Notification-item'>נרשם לקוח חדש</div>
    <Link to='/Notifications' className='Notification-Footer'>
      לכל ההתראות
    </Link>
  </div>
);

Navbar.propTypes = {
  user: PropTypes.object,
  Logout: PropTypes.func.isRequired,
  SetNotification: PropTypes.func,
  setAccount: PropTypes.func,
  NotificationsSelected: PropTypes.bool,
  AccountSelected: PropTypes.bool
};
const mapStateToProps = state => ({
  NotificationsSelected: state.NavReducer.NotificationsSelected,
  AccountSelected: state.NavReducer.AccountSelected,
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { Logout, SetNotification, SetAccount }
)(Navbar);
