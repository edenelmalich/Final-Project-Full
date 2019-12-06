import React from 'react';
import PropTypes from 'prop-types';
// import Link from react-router
import { Link } from 'react-router-dom';
// Bootstrap imports
import { Collapse } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';

const Account = ({ Logout, accountToggleState }) => {
  return (
    <Collapse in={accountToggleState}>
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
    </Collapse>
  );
};
Account.propTypes = {
  Logout: PropTypes.func.isRequired,
  accountToggleState: PropTypes.bool
};
const mapStateToProps = state => ({
  accountToggleState: state.NavReducer.accountToggleState
});
export default connect(mapStateToProps, { Logout })(Account);
