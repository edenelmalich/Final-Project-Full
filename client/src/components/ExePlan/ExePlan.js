import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
// Css imports
import './ExePlan.css';
// import Link from react-router
import { Link } from 'react-router-dom';
// Bootstrap imports
import { Button } from 'react-bootstrap';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { closeAll } from '../../actions/NavAction';
import { closeAlerts } from '../../actions/alertAction';
import { SetDays } from '../../actions/ExePlanAction';
const ExePlan = ({ closeAll, closeAlerts, SetDays }) => {
  // ComponentWillMount
  useEffect(() => {
    closeAll();
    closeAlerts();
  }, []);
  // ExePlan Functions
  const saveDay = dayName => {
    SetDays(dayName);
    localStorage.setItem('days', JSON.stringify(dayName));
  };
  return (
    <div className='ExePlan'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobilePlan />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Page-Container'>
          <div className='Pages-Content'>
            <div className='Att-PagesContent'>
              <div className='PagesContainer'>
                <h2>בניית תוכנית אימונים</h2>
                <div className='ExePadding'></div>

                <form className='ExeForm'>
                  <div className='Exe-Flex'>
                    <input type='text' placeholder='שם מתאמן' />
                    <select name='Days'>
                      <option>מספר ימי אימון</option>
                      <option value='one'>1</option>
                      <option value='two'>2</option>
                      <option value='three'>3</option>
                      <option value='four'>4</option>
                      <option value='five'>5</option>
                    </select>
                  </div>
                  <div className='ExePadding'></div>
                  <div className='Main-Border'></div>
                  <div className='ExePadding'></div>
                  <div className='ExeDays'>
                    <Link
                      onClick={() => saveDay('יום ראשון')}
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='SundayDesign'
                    >
                      <div className='DaysText'>יום ראשון</div>
                    </Link>
                    <Link
                      onClick={() => saveDay('יום שני')}
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='MondayDesign'
                    >
                      <div className='DaysText'>יום שני</div>
                    </Link>
                    <Link
                      onClick={() => saveDay('יום שלישי')}
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='TuesdayDesign'
                    >
                      <div className='DaysText'>יום שלישי</div>
                    </Link>
                    <Link
                      onClick={() => saveDay('יום רביעי')}
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='WednesdayDesign'
                    >
                      <div className='DaysText'>יום רביעי</div>
                    </Link>
                    <Link
                      onClick={() => saveDay('יום חמישי')}
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='ThursdayDesign'
                    >
                      <div className='DaysText'>יום חמישי</div>
                    </Link>
                    <Link
                      onClick={() => saveDay('יום שישי')}
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='FridayDesign'
                    >
                      <div className='DaysText'>יום שישי</div>
                    </Link>
                    <Link
                      onClick={() => saveDay('יום שבת')}
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='SaturdayDesign'
                    >
                      <div className='DaysText'>יום שבת</div>
                    </Link>
                  </div>
                  <div className='FooterAtt'>
                    <input type='submit' value='שלח תוכנית אימונים' />
                    <Button variant='light'>אפס תוכנית</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <AppFooter />
        </div>
      </MediaQuery>
    </div>
  );
};
const MobilePlan = () => (
  <div className='Mobile'>
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>בניית תוכנית אימונים</h2>
    </main>
    <MobileFooter />
  </div>
);
ExePlan.propTypes = {
  closeAll: PropTypes.func,
  closeAlerts: PropTypes.func,
  SetDays: PropTypes.func
};
export default connect(null, { closeAll, closeAlerts, SetDays })(ExePlan);
