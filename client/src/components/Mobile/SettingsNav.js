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
import { navSetting } from '../../actions/navAction';

const SettingsNav = ({ Logout, navSetting, settingToggleState }) => {
  // useState
  return (
    <div className='Mobile-Settings'>
      <div className='Nav-Header'>
        הגדרות
        <FontAwesomeIcon
          icon={faCog}
          onClick={() => navSetting(settingToggleState)}
        />
      </div>
      <div className='Main-Padding'></div>
      <Collapse isOpen={settingToggleState}>
        <NavLink
          to='/PersonalDetails'
          onClick={() => navSetting(settingToggleState)}
        >
          פרטים אישיים
        </NavLink>
        <NavLink
          to='/ChangePass'
          onClick={() => navSetting(settingToggleState)}
        >
          שינוי סיסמה
        </NavLink>
        <NavLink
          to='/ChangeEmail'
          onClick={() => navSetting(settingToggleState)}
        >
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
  settingToggleState: PropTypes.bool
};
const mapStateToProps = state => ({
  settingToggleState: state.navReducer.settingToggleState
});
export default connect(mapStateToProps, { Logout, navSetting })(SettingsNav);
