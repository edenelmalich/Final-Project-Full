import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../css/CssFont.css';
// import Link from react-router
import { Link } from 'react-router-dom';
// Bootstrap imports
import Collapse from 'react-bootstrap/Collapse';
// Redux
import { connect } from 'react-redux';
import { changeReadMessage } from '../../actions/notifications';
const Notifications = ({
  notificationsToggleState,
  NotificationsList,
  changeReadMessage
}) => {
  useEffect(() => {
    setNotification(NotificationsList);
  }, [NotificationsList]);
  const [getNotification, setNotification] = useState([]);
  return (
    <Collapse in={notificationsToggleState}>
      <div className='NotiBox'>
        <div className='Notification-Title'>
          {getNotification
            ? `יש לך ${getNotification.length} הודעות `
            : 'יש לך 0 הודעות חדשות'}
        </div>
        {getNotification.map(notification => (
          <div
            key={notification._id}
            className='Notification-item'
            id={notification.readMessage ? 'readMessage' : 'noReadMessage'}
            onClick={() => changeReadMessage(notification._id, true)}
          >
            {notification.subject} {notification.Name}
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
  notificationsToggleState: PropTypes.bool,
  changeReadMessage: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  notificationsToggleState: state.NavReducer.notificationsToggleState,
  NotificationsList: state.NavReducer.NotificationsList
});
export default connect(mapStateToProps, { changeReadMessage })(Notifications);
