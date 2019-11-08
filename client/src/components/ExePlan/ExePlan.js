import React from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './ExePlanCss.css';

const ExePlan = () => {
  // Function That For Checking The State of The Days
  // And The Function Set the state again
  return (
    <div className='ExePlan'>
      <Navbar />
      <div className='Page-Container'>
        <div className='Pages-Content'>
          <div className='Att-PagesContent'>
            <div className='PagesContainer'>
              <h2>בניית תוכנית אימונים</h2>
              <div className='ExePadding'></div>
              <div className='ExeMain'>
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
                    <NavLink
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='SundayDesign'
                    >
                      <div className='DaysText'>יום ראשון</div>
                    </NavLink>
                    <NavLink
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='MondayDesign'
                    >
                      <div className='DaysText'>יום שני</div>
                    </NavLink>
                    <NavLink
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='TuesdayDesign'
                    >
                      <div className='DaysText'>יום שלישי</div>
                    </NavLink>
                    <NavLink
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='WednesdayDesign'
                    >
                      <div className='DaysText'>יום רביעי</div>
                    </NavLink>
                    <NavLink
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='ThursdayDesign'
                    >
                      <div className='DaysText'>יום חמישי</div>
                    </NavLink>
                    <NavLink
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='FridayDesign'
                    >
                      <div className='DaysText'>יום שישי</div>
                    </NavLink>
                    <NavLink
                      to='/BuildPlan'
                      className='ExeBoxs'
                      id='SaturdayDesign'
                    >
                      <div className='DaysText'>יום שבת</div>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='FooterText'>
          <div className='FooterTitle'>Final Project By Eden Elmalich</div>
        </div>
      </div>
    </div>
  );
};
export default ExePlan;
