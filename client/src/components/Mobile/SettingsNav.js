import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
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
        <NavDropdown.Item href='/PersonalDetails'>
          פרטים אישיים
        </NavDropdown.Item>
        <NavDropdown.Item href='/changePass'>שינוי סיסמה</NavDropdown.Item>
        <NavDropdown.Item href='/ChangeEmail'>
          שינוי דואר אלקטרוני
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='/' onClick={() => Logout()}>
          התנתקות
        </NavDropdown.Item>
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
export default connect(
  mapStateToProps,
  { Logout, navSetting }
)(SettingsNav);
