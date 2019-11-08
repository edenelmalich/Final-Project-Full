import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';

const SettingsNav = ({ Logout }) => {
  return (
    <div className='Mobile-Settings'>
      <NavDropdown title='הגדרות' id='basic-nav-dropdown'>
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
  Logout: PropTypes.func.isRequired
};
export default connect(
  null,
  { Logout }
)(SettingsNav);
