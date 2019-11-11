import React, { Fragment, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './NotiCss.css';
import PropTypes from 'prop-types';
import AppFooter from '../AppFooter';
// Redux
import { connect } from 'react-redux';
import { closeAll } from '../../actions/NavAction';
const NotificationsPage = ({ closeAll }) => {
  useEffect(() => {
    closeAll();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <div className='Page-Container'>
        <main className='main'>
          <div className='Pages-Content'>
            <div className='Att-PagesContent'>
              <div className='PagesContainer'>
                <h2>התראות</h2>
                <div className='Noti-Padding'></div>
                <div className='Noti-Main'>
                  <div className='Noti-Window'>
                    <div className='Noti-Header '>התראות</div>
                    <div className='Main-Padding'></div>
                    <div className='Main-Border'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    </Fragment>
  );
};
NotificationsPage.propTypes = {
  closeAll: PropTypes.func.isRequired
};
export default connect(
  null,
  { closeAll }
)(NotificationsPage);
