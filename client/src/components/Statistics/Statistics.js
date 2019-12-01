import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Statistics.css';
import AppFooter from '../AppFooter';
import { Card } from 'react-bootstrap';
import HandState from './HandState';
import WeightStat from './WeightStat';
import ChestStat from './ChestStat';
import BackhandStat from './BackhandStat';
import PropTypes from 'prop-types';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { closeAll } from '../../actions/NavAction';
import { closeAlerts } from '../../actions/alertAction';
const Statistics = ({ closeAll, closeAlerts }) => {
  // ComponentWillMount
  useEffect(() => {
    closeAll();
    closeAlerts();
  }, []);
  return (
    <div className='Statistics'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileStat />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>סטטיסטיקת מתאמנים</h2>
                  <form className='Stat-Form'>
                    <input type='text' placeholder='הכנס שם מתאמן' />
                    <input type='submit' value='בדוק סטטיסטיקות' />
                  </form>
                  <div className='Stat-content'>
                    <Card>
                      <Card.Header>סטטיסטיקת משקל</Card.Header>
                      <WeightStat />
                    </Card>
                    <Card>
                      <Card.Header>סטטיסטיקת היקף יד קדמית</Card.Header>
                      <HandState />
                    </Card>
                    <Card>
                      <Card.Header>סטטיסטיקת היקף חזה</Card.Header>
                      <ChestStat />
                    </Card>
                    <Card>
                      <Card.Header>סטטיסטיקת היקף יד אחורית</Card.Header>
                      <BackhandStat />
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <AppFooter />
        </div>
      </MediaQuery>
    </div>
  );
};
const MobileStat = () => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>סטטיסטיקת מתאמנים</h2>
      <form className='Stat-Form'>
        <input type='text' placeholder='הכנס שם מתאמן' />
        <input type='submit' value='בדוק סטטיסטיקות' />
      </form>
      <div className='Stat-content'>
        <Card>
          <Card.Header>סטטיסטיקת משקל</Card.Header>
          <WeightStat />
        </Card>
        <Card>
          <Card.Header>סטטיסטיקת היקף יד קדמית</Card.Header>
          <HandState />
        </Card>
        <Card>
          <Card.Header>סטטיסטיקת היקף חזה </Card.Header>
          <ChestStat />
        </Card>
        <Card>
          <Card.Header>סטטיסטיקת היקף יד אחורית</Card.Header>
          <BackhandStat />
        </Card>
      </div>
    </main>
    <MobileFooter />
  </div>
);
Statistics.propTypes = {
  closeAll: PropTypes.func,
  closeAlerts: PropTypes.func
};
export default connect(null, { closeAll, closeAlerts })(Statistics);
