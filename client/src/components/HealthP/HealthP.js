import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import { Card } from 'react-bootstrap';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
class HealthP extends Component {
  render() {
    return (
      <div className='Healthp'>
        <MediaQuery maxDeviceWidth={1000}>
          <MobileHealth />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <Navbar />
          <div className='Page-Container'>
            <main className='main'>
              <div className='Pages-Content'>
                <div className='Att-PagesContent'>
                  <div className='PagesContainer'>
                    <h2>הצהרות בריאות</h2>
                    <div className='Card-Pages'>
                      <Card id='Health-Card-size'>
                        <div className='Card-Title'>הצהרות בריאות</div>
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
  }
}
const MobileHealth = () => (
  <div className='Mobile'>
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>הצהרות בריאות</h2>
      <Card id='Health-Card-size'>
        <div className='Card-Title'>הצהרות בריאות</div>
        <Card.Body></Card.Body>
      </Card>
    </main>
    <MobileFooter />
  </div>
);
export default HealthP;
