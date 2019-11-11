import React, { Fragment, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './NotiCss.css';
import PropTypes from 'prop-types';
import AppFooter from '../AppFooter';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
import SettingsNav from '../Mobile/SettingsNav';
// Redux
import { connect } from 'react-redux';
import { closeAll } from '../../actions/NavAction';
const NotificationsPage = ({ closeAll }) => {
  useEffect(() => {
    closeAll();
  }, []);
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNoti />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>התראות</h2>

                  <div className='Noti-Main'>
                    <div className='Noti-Header '>התראות</div>
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
    <MobileNav />
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
export default connect(
  null,
  { closeAll }
)(NotificationsPage);
