import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Updates.css';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { update } from '../../actions/UpdateAction';
import AppFooter from '../AppFooter';
const Updates = ({ update }) => {
  const [updateData, SetUpdateData] = useState({
    Firstname: '',
    Lastname: '',
    UpdateMessage: ''
  });
  const { Firstname, Lastname, UpdateMessage } = updateData;

  const onChange = e => {
    SetUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    update(Firstname, Lastname, UpdateMessage);
  };

  return (
    <div className='updates'>
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
                  <form onSubmit={e => onSubmit(e)} className='Form-Update'>
                    <div className='Main-Padding'></div>
                    <input
                      type='text'
                      name='Firstname'
                      value={Firstname}
                      onChange={e => onChange(e)}
                      placeholder='שם פרטי'
                      required
                    />
                    <input
                      type='text'
                      name='Lastname'
                      value={Lastname}
                      onChange={e => onChange(e)}
                      placeholder='שם משפחה'
                      required
                    />
                    <div className='Main-Padding'></div>
                    <div className='Main-Border'></div>
                    <label>הכנס עדכון חדש</label>
                    <div className='Main-Padding'></div>
                    <textarea
                      name='UpdateMessage'
                      value={UpdateMessage}
                      onChange={e => onChange(e)}
                      required
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
    </div>
  );
};
Updates.propType = {
  updateSuccess: PropTypes.bool
};
const mapStateToProps = state => ({
  updateSuccess: state.updateReducer.updateSuccess
});
export default connect(
  mapStateToProps,
  { update }
)(Updates);
