import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
const Notifications = ({ NotificationsSelected }) => {
  return (
    <Collapse in={NotificationsSelected}>
      <div className='NotiBox'>
        <div className='Notification-Title'>יש לך 2 התראות חדשות</div>
        <div className='Notification-item'>התקבלה הצהרת בריאות חדשה</div>
        <div className='Notification-item'>נרשם לקוח חדש</div>
        <Link to='/Notifications' className='Notification-Footer'>
          לכל ההתראות
        </Link>
      </div>
    </Collapse>
  );
};
Notifications.propTypes = {
  NotificationsSelected: PropTypes.bool
};
const mapStateToProps = state => ({
  NotificationsSelected: state.NavReducer.NotificationsSelected
});
export default connect(mapStateToProps)(Notifications);
