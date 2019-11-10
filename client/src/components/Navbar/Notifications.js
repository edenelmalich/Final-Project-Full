import React from 'react';
import { Link } from 'react-router-dom';
const Notifications = () => {
  return (
    <div className='NotiBox'>
      <div className='Notification-Title'>יש לך 2 התראות חדשות</div>
      <div className='Notification-item'>התקבלה הצהרת בריאות חדשה</div>
      <div className='Notification-item'>נרשם לקוח חדש</div>
      <Link to='/Notifications' className='Notification-Footer'>
        לכל ההתראות
      </Link>
    </div>
  );
};
export default Notifications;
