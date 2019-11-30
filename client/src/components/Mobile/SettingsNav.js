import React from 'react';
import PropTypes from 'prop-types';
// React Router imports
import { NavLink } from 'react-router-dom';
// Bootstrap imports
import { NavDropdown } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';
import { navSetting } from '../../actions/NavAction';

const SettingsNav = ({ Logout, navSetting, SettingState }) => {
  return (
    <div className='Mobile-Settings'>
      <NavDropdown
        title='הגדרות'
        id='basic-nav-dropdown'
        onClick={() => navSetting(SettingState)}
      >
        <NavLink to='/PersonalDetails'>פרטים אישיים</NavLink>
        <NavLink to='/changePass'>שינוי סיסמה</NavLink>
        <NavLink to='/ChangeEmail'>שינוי דואר אלקטרוני</NavLink>
        <NavDropdown.Divider />
        <NavLink to='/' onClick={() => Logout()}>
          התנתקות
        </NavLink>
      </NavDropdown>
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
