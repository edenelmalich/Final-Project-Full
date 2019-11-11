import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Statistics.css';
import AppFooter from '../AppFooter';
import { Card } from 'react-bootstrap';
import HandState from './HandState';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
const Statistics = () => {
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

                      <HandState />
                    </Card>
                    <Card>
                      <Card.Header>סטטיסטיקת היקף יד קדמית</Card.Header>
                      <Card.Body></Card.Body>
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
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>סטטיסטיקת מתאמנים</h2>
      <form className='Stat-Form'>
        <input type='text' placeholder='הכנס שם מתאמן' />
        <input type='submit' value='בדוק סטטיסטיקות' />
      </form>
      <div className='Stat-content'>
        <Card id='Stat-card'>
          <Card.Header>סטטיסטיקת משקל</Card.Header>
          <HandState />
        </Card>
        <Card>
          <Card.Header>סטטיסטיקת היקף יד קדמית</Card.Header>
        </Card>
      </div>
    </main>
    <MobileFooter />
  </div>
);
export default Statistics;
