import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Link from react-router
import { Link } from 'react-router-dom';
// Bootstrap imports
import Collapse from 'react-bootstrap/Collapse';
// Redux
import { connect } from 'react-redux';
const Notifications = ({ notificationsToggleState, getDocuments }) => {
  useEffect(() => {
    setNotification(
      getDocuments.filter(update => update.readMessage === false)
    );
  }, [getDocuments]);
  const [getNotification, setNotification] = useState([]);
  console.log(getNotification.length);
  return (
    <Collapse in={notificationsToggleState}>
      <div className='NotiBox'>
        <div className='Notification-Title'>
          {getNotification
            ? `יש לך ${getNotification.length} הודעות חדשות`
            : 'יש לך 0 הודעות חדשות'}
        </div>
        {getNotification.map(notification => (
          <div className='Notification-item'>
            התקבלה {notification.subject} חדשה
          </div>
        ))}
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
  notificationsToggleState: state.NavReducer.notificationsToggleState,
  getDocuments: state.healthReducer.getDocuments
});
export default connect(mapStateToProps)(Notifications);
