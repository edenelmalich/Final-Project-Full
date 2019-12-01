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
import { update } from '../../actions/UpdateAction';
import { closeAlerts } from '../../actions/alertAction';
import { closeAll } from '../../actions/NavAction';

const Updates = ({ update, closeAlerts, closeAll }) => {
  // componentWillMount
  useEffect(() => {
    closeAlerts();
    closeAll();
  }, []);
  // useState
  const [updateData, SetUpdateData] = useState({
    Firstname: '',
    Lastname: '',
    UpdateMessage: ''
  });
  const { Firstname, Lastname, UpdateMessage } = updateData;
  // Functions
  const onChange = e => {
    SetUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    update(Firstname, Lastname, UpdateMessage);
    restForm();
  };
  const restForm = () => {
    SetUpdateData({
      ...updateData,
      Firstname: '',
      Lastname: '',
      UpdateMessage: ''
    });
  };
  return (
    <div className='updates'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileUpdates
          onSubmit={onSubmit}
          Firstname={Firstname}
          onChange={onChange}
          Lastname={Lastname}
          UpdateMessage={UpdateMessage}
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
                        name='Firstname'
                        value={Firstname}
                        onChange={e => onChange(e)}
                        placeholder='שם פרטי'
                      />
                      <label id='Form-label'>שם משפחה</label>
                      <input
                        type='text'
                        name='Lastname'
                        value={Lastname}
                        onChange={e => onChange(e)}
                        placeholder='שם משפחה'
                      />

                      <label id='Form-label'>הכנס עדכון חדש</label>

                      <textarea
                        name='UpdateMessage'
                        value={UpdateMessage}
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
  Firstname,
  Lastname,
  UpdateMessage
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
            name='Firstname'
            value={Firstname}
            onChange={e => onChange(e)}
            placeholder='שם פרטי'
          />
          <label id='Form-label'>שם משפחה</label>
          <input
            type='text'
            name='Lastname'
            value={Lastname}
            onChange={e => onChange(e)}
            placeholder='שם משפחה'
          />

          <label id='Form-label'>הכנס עדכון חדש</label>
          <div className='Main-Padding'></div>
          <textarea
            name='UpdateMessage'
            value={UpdateMessage}
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
  update: PropTypes.func,
  closeAlerts: PropTypes.func,
  closeAll: PropTypes.func
};
const mapStateToProps = state => ({
  updateSuccess: state.updateReducer.updateSuccess
});
export default connect(mapStateToProps, { update, closeAlerts, closeAll })(
  Updates
);
