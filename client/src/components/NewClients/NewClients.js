import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import Alert from '../layout/Alert';
// Css imports
import './NewClients.css';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { setNewClient } from '../../actions/newClientsAction';
import { calcTotal } from '../../actions/calcAction';
import { closeAll } from '../../actions/navAction';
import { closeAlerts } from '../../actions/alertAction';

const NewClients = ({ setNewClient, closeAll, closeAlerts }) => {
  useEffect(() => {
    closeAll();
    closeAlerts();
  }, []);
  // useState
  const [typeData, setType] = useState([
    { label: 'רגיל', id: 1, value: 200, selected: false },
    { label: 'סטודנט', id: 2, value: 150, selected: false }
  ]);
  const [paymentData, setPayment] = useState([
    { label: 'אשראי', id: 1, value: 'אשראי', selected: false },
    { label: 'מזומן', id: 2, value: 'מזומן', selected: false }
  ]);
  const [timeData, setTime] = useState([
    {
      label: 'חודש',
      value: 1,
      id: 1,
      selected: false
    },
    {
      label: 'שלושה חודשים',
      value: 3,
      id: 2,
      selected: false
    },
    {
      label: 'שנה',
      value: 12,
      id: 3,
      selected: false
    }
  ]);
  const [typeName, setTypeName] = useState({});
  const [timeName, setTimeName] = useState({});
  const [calculationData, setCalculation] = useState(0);
  const [calcType, setCalcType] = useState({});
  const [calcTime, setCalcTime] = useState({});
  const [calcPayment, setCalcPayment] = useState({});
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    id: '',
    Phone: ''
  });

  const { firstname, lastname, id, Phone } = formData;
  // Functions
  const SetData = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChange = (e, id) => {
    if (e.target.value === 'typeData') {
      setType(
        typeData.map(type => {
          if (type.id === id && type.selected === false) {
            setCalcType({ calcType: type.value });
            setTypeName({ typeName: type.label });
            return { ...type, selected: true };
          }
          return { ...type, selected: false };
        })
      );
    }
    if (e.target.value === 'timeData') {
      setTime(
        timeData.map(time => {
          if (time.id === id && time.selected === false) {
            setCalcTime({ calcTime: time.value });
            setTimeName({ timeName: time.label });
            return { ...time, selected: true };
          }
          return { ...time, selected: false };
        })
      );
    }
    if (e.target.value === 'paymentData') {
      setPayment(
        paymentData.map(payment => {
          if (payment.id === id && payment.selected === false) {
            setCalcPayment({ calcPayment: payment.value });
            return { ...payment, selected: true };
          }
          return { ...payment, selected: false };
        })
      );
    }
  };
  const onSubmit = e => {
    let Total = 0;
    e.preventDefault();
    if (calcType.calcType !== undefined && calcTime.calcTime !== undefined) {
      Total = calcType.calcType * calcTime.calcTime;
    }
    setCalculation(Total);
    setNewClient(
      firstname,
      lastname,
      id,
      Phone,
      typeName.typeName,
      timeName.timeName,
      calcPayment.calcPayment,
      Total
    );
    ResetForm();
  };

  const ResetForm = () => {
    setTimeout(() => {
      setCalculation(0);
    }, 2000);
    setFormData({
      ...formData,
      firstname: '',
      lastname: '',
      id: '',
      Phone: ''
    });
    setTimeName('');
    setTypeName('');
    setCalcTime('');
    setCalcType('');
    setCalcPayment('');
    setType(
      typeData.map(type => {
        return { ...type, selected: false };
      })
    );
    setTime(
      timeData.map(time => {
        return { ...time, selected: false };
      })
    );
    setPayment(
      paymentData.map(payment => {
        return { ...payment, selected: false };
      })
    );
  };
  return (
    <div className='Nclients'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileNclient
          typeData={typeData}
          onChange={onChange}
          timeData={timeData}
          paymentData={paymentData}
          calculationData={calculationData}
          SetData={SetData}
          Phone={Phone}
          id={id}
          firstname={firstname}
          lastname={lastname}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <Navbar />

        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>לקוח חדש</h2>
                  <div className='FormClient'>
                    <header className='Header-Client'>
                      <h3>הוספת לקוח חדש</h3>
                    </header>
                    <div className='Alert-Position'>
                      <Alert />
                    </div>
                    <form
                      className='Nclient-FormAtt'
                      onSubmit={e => onSubmit(e)}
                    >
                      <div className='Form-Flex'>
                        <input
                          type='text'
                          name='firstname'
                          value={firstname}
                          onChange={e => SetData(e)}
                          placeholder='שם פרטי'
                        />
                        <input
                          type='text'
                          name='lastname'
                          value={lastname}
                          onChange={e => SetData(e)}
                          placeholder='שם משפחה'
                        />
                        <input
                          type='text'
                          name='id'
                          value={id}
                          onChange={e => SetData(e)}
                          placeholder='תעודת זהות'
                        />
                        <input
                          type='text'
                          name='Phone'
                          value={Phone}
                          onChange={e => SetData(e)}
                          placeholder='טלפון'
                        />
                      </div>
                      <div className='Main-Padding'></div>
                      <div className='Main-Border'></div>
                      <label>סוג המנוי:</label>
                      {typeData.map(item => (
                        <div className='Radio-Text' key={item.id}>
                          {item.label}
                          <input
                            type='radio'
                            value={'typeData'}
                            name='Type'
                            onChange={e => onChange(e, item.id)}
                            checked={item.selected}
                          />
                        </div>
                      ))}
                      <div className='Main-Border'></div>
                      <label>תקופת מנוי:</label>
                      {timeData.map(item => (
                        <div className='Radio-Text' key={item.id}>
                          {item.label}
                          <input
                            type='radio'
                            name='Time'
                            value={'timeData'}
                            onChange={e => onChange(e, item.id)}
                            checked={item.selected}
                          />
                        </div>
                      ))}
                      <div className='Main-Border'></div>
                      <label>יגבה תשלום חד פעמי בעלות של 20 ₪ עבור צ'יפ.</label>
                      <div className='Main-Border'></div>
                      <label>אמצעי תשלום:</label>
                      {paymentData.map(item => (
                        <span className='Radio-Text' key={item.id}>
                          {item.label}
                          <input
                            type='radio'
                            value={'paymentData'}
                            onChange={e => onChange(e, item.id)}
                            checked={item.selected}
                          />
                        </span>
                      ))}
                      <div className='Main-Border'></div>
                      <label>סך הכל לתשלום:</label>

                      <span className='calculation'>{calculationData} ₪</span>

                      <div className='Main-Border'></div>
                      <div className='Main-Padding'></div>
                      <input type='submit' name='send' value='הוסף לקוח חדש' />
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
const MobileNclient = ({
  typeData,
  onChange,
  timeData,
  paymentData,
  calculationData,
  firstname,
  lastname,
  SetData,
  id,
  Phone,
  onSubmit
}) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>לקוח חדש</h2>
      <div className='FormClient'>
        <header className='Header-Client'>
          <h3>הוספת לקוח חדש</h3>
        </header>
        <form
          action='#'
          className='Nclient-FormAtt'
          onSubmit={e => onSubmit(e)}
        >
          <div className='Form-Flex'>
            <input
              type='text'
              name='firstname'
              value={firstname}
              onChange={e => SetData(e)}
              placeholder='שם פרטי'
            />
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={e => SetData(e)}
              placeholder='שם משפחה'
            />
            <input
              type='text'
              name='id'
              value={id}
              onChange={e => SetData(e)}
              placeholder='תעודת זהות'
            />
            <input
              type='text'
              name='Phone'
              value={Phone}
              onChange={e => SetData(e)}
              placeholder='טלפון'
            />
          </div>
          <div className='Main-Padding'></div>
          <div className='Main-Border'></div>
          <label>סוג המנוי:</label>
          {typeData.map(item => (
            <div className='Radio-Text' key={item.id}>
              {item.label}
              <input
                type='radio'
                value={'typeData'}
                name='Type'
                onChange={e => onChange(e, item.id)}
                checked={item.selected}
              />
            </div>
          ))}
          <div className='Main-Border'></div>
          <label>תקופת מנוי:</label>
          {timeData.map(item => (
            <div className='Radio-Text' key={item.id}>
              {item.label}
              <input
                type='radio'
                name='Time'
                value={'timeData'}
                onChange={e => onChange(e, item.id)}
                checked={item.selected}
              />
            </div>
          ))}
          <div className='Main-Border'></div>
          <label>יגבה תשלום חד פעמי בעלות של 20 ₪ עבור צ'יפ.</label>
          <div className='Main-Border'></div>
          <label>אמצעי תשלום:</label>
          {paymentData.map(item => (
            <span className='Radio-Text' key={item.id}>
              {item.label}
              <input
                type='radio'
                value={'paymentData'}
                onChange={e => onChange(e, item.id)}
                checked={item.selected}
              />
            </span>
          ))}
          <div className='Main-Border'></div>
          <label>סך הכל לתשלום:</label>
          <span className='calculation'>{calculationData} ₪</span>
          <div className='Main-Border'></div>
          <div className='Main-Padding'></div>
          <Alert />
          <input type='submit' name='send' value='הוסף לקוח חדש' />
        </form>
      </div>
    </main>
    <MobileFooter />
  </div>
);

NewClients.propType = {
  SendFail: PropTypes.bool,
  closeAll: PropTypes.func,
  calcTotal: PropTypes.func,
  closeAlerts: PropTypes.func,
  setNewClient: PropTypes.func
};
const mapStateToProps = state => ({
  total: state.calcReducer.total
});
export default connect(mapStateToProps, {
  setNewClient,
  calcTotal,
  closeAll,
  closeAlerts
})(NewClients);
