import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Updates.css';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
import AppFooter from '../AppFooter';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { setUpdate } from '../../actions/updateAction';
import { closeAlerts } from '../../actions/alertAction';
import { closeAll } from '../../actions/navAction';

const Updates = ({ setUpdate, closeAlerts, closeAll }) => {
  // componentWillMount
  useEffect(() => {
    closeAlerts();
    closeAll();
  }, []);
  // useState
  const [updateData, setUpdateData] = useState({
    Firstname: '',
    Lastname: '',
    UpdateMessage: ''
  });
  const { firstName, lastName, updateMessage } = updateData;
  // Functions
  const onChange = e => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setUpdate(firstName, lastName, updateMessage);
    restForm();
  };
  const restForm = () => {
    setUpdateData({
      ...updateData,
      firstName: '',
      lastName: '',
      updateMessage: ''
    });
  };
  return (
    <div className='updates'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileUpdates
          onSubmit={onSubmit}
          firstName={firstName}
          onChange={onChange}
          lastName={lastName}
          updateMessage={updateMessage}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>עדכון חדש</h2>
                  <div className='FormClient'>
                    <header className='Header-Client'>
                      <h3>עדכונים</h3>
                    </header>
                    <div className='Alert-Position'>
                      <Alert />
                    </div>
                    <form onSubmit={e => onSubmit(e)} className='Form-Update'>
                      <label id='Form-label'>שם פרטי</label>
                      <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={e => onChange(e)}
                        placeholder='שם פרטי'
                      />
                      <label id='Form-label'>שם משפחה</label>
                      <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={e => onChange(e)}
                        placeholder='שם משפחה'
                      />

                      <label id='Form-label'>הכנס עדכון חדש</label>

                      <textarea
                        name='updateMessage'
                        value={updateMessage}
                        onChange={e => onChange(e)}
                      ></textarea>
                      <div className='Main-Padding'></div>
                      <div className='Main-Border'></div>
                      <input
                        type='submit'
                        name='SendUpdate'
                        value='הוסף עדכון חדש'
                      />
                    </form>
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
const MobileUpdates = ({
  onChange,
  onSubmit,
  firstName,
  lastName,
  updateMessage
}) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>עדכונים</h2>
      <div className='FormClient'>
        <header className='Header-Client'>
          <h3>עדכונים</h3>
        </header>
        <form onSubmit={e => onSubmit(e)} className='Form-Update'>
          <label id='Form-label'>שם פרטי</label>
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={e => onChange(e)}
            placeholder='שם פרטי'
          />
          <label id='Form-label'>שם משפחה</label>
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={e => onChange(e)}
            placeholder='שם משפחה'
          />

          <label id='Form-label'>הכנס עדכון חדש</label>
          <div className='Main-Padding'></div>
          <textarea
            name='updateMessage'
            value={updateMessage}
            onChange={e => onChange(e)}
          ></textarea>
          <div className='Main-Padding'></div>
          <div className='Main-Border'></div>
          <Alert />
          <input type='submit' name='SendUpdate' value='הוסף עדכון חדש' />
        </form>
      </div>
    </main>
    <MobileFooter />
  </div>
);
Updates.propType = {
  updateSuccess: PropTypes.bool,
  setUpdate: PropTypes.func,
  closeAlerts: PropTypes.func,
  closeAll: PropTypes.func
};
const mapStateToProps = state => ({
  updateSuccess: state.updateReducer.updateSuccess
});
export default connect(mapStateToProps, { setUpdate, closeAlerts, closeAll })(
  Updates
);
