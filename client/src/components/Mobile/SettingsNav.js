import React from 'react';
import PropTypes from 'prop-types';
// React Router imports
import { NavLink, Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
// Bootstrap imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';
import { navSetting } from '../../actions/NavAction';

const SettingsNav = ({ Logout, navSetting, SettingState }) => {
  // useState
  return (
    <div className='Mobile-Settings'>
      <div className='Nav-Header'>
        הגדרות
        <FontAwesomeIcon
          icon={faCog}
          onClick={() => navSetting(SettingState)}
        />
      </div>
      <div className='Main-Padding'></div>
      <Collapse isOpen={SettingState}>
        <NavLink to='/PersonalDetails' onClick={() => navSetting(SettingState)}>
          פרטים אישיים
        </NavLink>
        <NavLink to='/changePass' onClick={() => navSetting(SettingState)}>
          שינוי סיסמה
        </NavLink>
        <NavLink to='/ChangeEmail' onClick={() => navSetting(SettingState)}>
          שינוי דואר אלקטרוני
        </NavLink>
        <Link to='/' onClick={() => Logout()}>
          התנתקות
        </Link>
      </Collapse>
      <div className='Main-Padding'></div>
    </div>
  );
};
SettingsNav.propTypes = {
  Logout: PropTypes.func.isRequired,
  SettingState: PropTypes.bool
};
const mapStateToProps = state => ({
  SettingState: state.NavReducer.SettingState
});
export default connect(mapStateToProps, { Logout, navSetting })(SettingsNav);
