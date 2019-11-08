import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Statistics.css';
import AppFooter from '../AppFooter';
import { Card } from 'react-bootstrap';
const Statistics = () => {
  return (
    <div className='Statistics'>
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
                    <Card.Body></Card.Body>
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
    </div>
  );
};

export default Statistics;
