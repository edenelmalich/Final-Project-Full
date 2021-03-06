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
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { closeAll } from '../../actions/navsAction';
import { closeAlerts } from '../../actions/alertAction';
import { setDays } from '../../actions/exercisesAction';
const ExePlan = ({ closeAll, closeAlerts, setDays }) => {
  // ComponentWillMount
  useEffect(() => {
    closeAll();
    closeAlerts();
  }, []);

  // This function get the day name if we click some day and set the date name
  const saveDay = dayName => {
    setDays(dayName);
    localStorage.setItem('days', JSON.stringify(dayName));
  };
  return (
    <div className='ExePlan'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobilePlan saveDay={saveDay} />
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
const MobilePlan = ({ saveDay }) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>בניית תוכנית אימונים</h2>
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
        <div className='ExeDays'>
          <Link
            onClick={() => saveDay('יום ראשון')}
            to='/ShowBuild'
            className='ExeBoxs'
            id='SundayDesign'
          >
            <div className='DaysText'>יום ראשון</div>
          </Link>
          <Link
            onClick={() => saveDay('יום שני')}
            to='/ShowBuild'
            className='ExeBoxs'
            id='MondayDesign'
          >
            <div className='DaysText'>יום שני</div>
          </Link>
          <Link
            onClick={() => saveDay('יום שלישי')}
            to='/ShowBuild'
            className='ExeBoxs'
            id='TuesdayDesign'
          >
            <div className='DaysText'>יום שלישי</div>
          </Link>
          <Link
            onClick={() => saveDay('יום רביעי')}
            to='/ShowBuild'
            className='ExeBoxs'
            id='WednesdayDesign'
          >
            <div className='DaysText'>יום רביעי</div>
          </Link>
          <Link
            onClick={() => saveDay('יום חמישי')}
            to='/ShowBuild'
            className='ExeBoxs'
            id='ThursdayDesign'
          >
            <div className='DaysText'>יום חמישי</div>
          </Link>
          <Link
            onClick={() => saveDay('יום שישי')}
            to='/ShowBuild'
            className='ExeBoxs'
            id='FridayDesign'
          >
            <div className='DaysText'>יום שישי</div>
          </Link>
          <Link
            onClick={() => saveDay('יום שבת')}
            to='/ShowBuild'
            className='ExeBoxs'
            id='SaturdayDesign'
          >
            <div className='DaysText'>יום שבת</div>
          </Link>
          <div className='ExePadding'></div>
        </div>
        <div className='FooterAtt'>
          <input type='submit' value='שלח תוכנית אימונים' />
          <Button variant='light'>אפס תוכנית</Button>
        </div>
      </form>
    </main>
    <MobileFooter />
  </div>
);
ExePlan.propTypes = {
  closeAll: PropTypes.func,
  closeAlerts: PropTypes.func,
  setDays: PropTypes.func
};
export default connect(null, { closeAll, closeAlerts, setDays })(ExePlan);
