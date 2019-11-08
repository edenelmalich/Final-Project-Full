import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';

class HealthP extends Component {
  render() {
    return (
      <div className='Healthp'>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>הצהרות בריאות</h2>
                  <div className='Flex-Pages'>
                    <div className='FormData'>
                      <header className='header-Form'>
                        <h3>הצהרות בריאות</h3>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <AppFooter />
        </div>
      </div>
    );
  }
}
export default HealthP;
