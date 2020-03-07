import React, { Fragment, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notifications.css';
import PropTypes from 'prop-types';
import AppFooter from '../AppFooter';
import { Toast, Card } from 'react-bootstrap';
import moment from 'moment';
// Mobile imports
import '../../css/Mobile.css';

import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';

// Redux
import { connect } from 'react-redux';
import { closeAll } from '../../actions/navsAction';
const NotificationsPage = ({ closeAll, NotificationsList }) => {
  useEffect(() => {
    closeAll();
  }, []);
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={900}>
        <MobileNoti NotificationsList={NotificationsList} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>התראות</h2>
                  <div className='Noti-Main'>
                    <div className='Noti-Header '>התראות</div>
                    <Card>
                      <Card.Body>
                        {NotificationsList.map(noti => (
                          <Toast style={{ width: 'unset' }}>
                            <Toast.Header>
                              <strong>התראה חדשה</strong>
                              <small style={{ paddingLeft: '15px' }}>
                                {moment(noti.date).format('DD/MM/YYYY')}
                              </small>
                            </Toast.Header>
                            <Toast.Body>התקבלה {noti.subject} חדשה</Toast.Body>
                          </Toast>
                        ))}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <AppFooter />
        </div>
      </MediaQuery>
    </Fragment>
  );
};
const MobileNoti = () => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>התראות</h2>
      <div className='Noti-Main'>
        <div className='Noti-Window'>
          <div className='Noti-Header '>התראות</div>
        </div>
      </div>
    </main>
    <MobileFooter />
  </div>
);
NotificationsPage.propTypes = {
  closeAll: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  NotificationsList: state.NavReducer.NotificationsList
});
export default connect(mapStateToProps, { closeAll })(NotificationsPage);
