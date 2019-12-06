import React from 'react';
import PropTypes from 'prop-types';
// import Link from react-router
import { Link } from 'react-router-dom';
// Bootstrap imports
import Collapse from 'react-bootstrap/Collapse';
// Redux
import { connect } from 'react-redux';
const Notifications = ({ notificationsToggleState }) => {
  return (
    <Collapse in={notificationsToggleState}>
      <div className='NotiBox'>
        <div className='Notification-Title'>יש לך 2 התראות חדשות</div>
        <div className='Notification-item'>התקבלה הצהרת בריאות חדשה</div>
        <div className='Notification-item'>נרשם לקוח חדש</div>
        <Link to='/NotificationsPage' className='Notification-Footer'>
          לכל ההתראות
        </Link>
      </div>
    </Collapse>
  );
};
Notifications.propTypes = {
  notificationsToggleState: PropTypes.bool
};
const mapStateToProps = state => ({
  notificationsToggleState: state.NavReducer.notificationsToggleState
});
export default connect(mapStateToProps)(Notifications);
