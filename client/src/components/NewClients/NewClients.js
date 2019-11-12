import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import './NewClients.css';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { Nclient } from '../../actions/NclientAction';
import { setAlert } from '../../actions/alertAction';
import { CalcTotal } from '../../actions/CalcAction';
const NewClients = ({ Nclient, SendSuccess, setAlert }) => {
  // Data
  const Time = [
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
  ];
  const Type = [
    { label: 'רגיל', id: 1, value: 200, selected: false },
    { label: 'סטודנט', id: 2, value: 150, selected: false }
  ];
  const Payment = [
    { label: 'אשראי', id: 1, value: 'אשראי', selected: false },
    { label: 'מזומן', id: 2, value: 'מזומן', selected: false }
  ];
  // useState
  const [TypeData, setType] = useState(Type);
  const [TimeData, setTime] = useState(Time);
  const [TypeName, setTypeName] = useState({});
  const [TimeName, setTimeName] = useState({});
  const [PaymentData, setPayment] = useState(Payment);
  const [CalculationData, SetCalculation] = useState(0);
  const [CalcType, SetCalcType] = useState({});
  const [CalcTime, SetCalcTime] = useState({});
  const [CalcPayment, setCalcPayment] = useState({});
  const [FormData, SetFormData] = useState({
    firstname: '',
    lastname: '',
    id: '',
    Phone: ''
  });

  const { firstname, lastname, id, Phone } = FormData;
  // Functions
  const SetData = e =>
    SetFormData({ ...FormData, [e.target.name]: e.target.value });
  const onChange = (e, id) => {
    if (e.target.value === 'TypeData') {
      setType(
        TypeData.map(type => {
          if (type.id === id && type.selected === false) {
            SetCalcType({ CalcType: type.value });
            setTypeName({ TypeName: type.label });
            return { ...type, selected: true };
          }
          return { ...type, selected: false };
        })
      );
    }
    if (e.target.value === 'TimeData') {
      setTime(
        TimeData.map(time => {
          if (time.id === id && time.selected === false) {
            SetCalcTime({ CalcTime: time.value });
            setTimeName({ TimeName: time.label });
            return { ...time, selected: true };
          }
          return { ...time, selected: false };
        })
      );
    }
    if (e.target.value === 'PaymentData') {
      setPayment(
        PaymentData.map(payment => {
          if (payment.id === id && payment.selected === false) {
            setCalcPayment({ CalcPayment: payment.value });
            return { ...payment, selected: true };
          }
          return { ...payment, selected: false };
        })
      );
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    const Total = CalcType.CalcType * CalcTime.CalcTime;
    SetCalculation(Total);
    Nclient(
      firstname,
      lastname,
      id,
      Phone,
      TypeName.TypeName,
      TimeName.TimeName,
      CalcPayment.CalcPayment,
      Total
    );
    ResetForm();
  };

  const ResetForm = () => {
    setTimeout(() => {
      SetCalculation(0);
    }, 2000);
    SetFormData({
      ...FormData,
      firstname: '',
      lastname: '',
      id: '',
      Phone: ''
    });
    setType(
      TypeData.map(type => {
        return { ...type, selected: false };
      })
    );
    setTime(
      TimeData.map(time => {
        return { ...time, selected: false };
      })
    );
    setPayment(
      PaymentData.map(payment => {
        return { ...payment, selected: false };
      })
    );
  };
  if (SendSuccess) {
    setAlert('לקוח נרשם בהצלחה', 'success');
  }
  return (
    <div className='Nclients'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileNclient
          TypeData={TypeData}
          onChange={onChange}
          TimeData={TimeData}
          PaymentData={PaymentData}
          CalculationData={CalculationData}
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
                      {TypeData.map(item => (
                        <div className='Radio-Text' key={item.id}>
                          {item.label}
                          <input
                            type='radio'
                            value={'TypeData'}
                            name='Type'
                            onChange={e => onChange(e, item.id)}
                            checked={item.selected}
                          />
                        </div>
                      ))}
                      <div className='Main-Border'></div>
                      <label>תקופת מנוי:</label>
                      {TimeData.map(item => (
                        <div className='Radio-Text' key={item.id}>
                          {item.label}
                          <input
                            type='radio'
                            name='Time'
                            value={'TimeData'}
                            onChange={e => onChange(e, item.id)}
                            checked={item.selected}
                          />
                        </div>
                      ))}
                      <div className='Main-Border'></div>
                      <label>יגבה תשלום חד פעמי בעלות של 20 ₪ עבור צ'יפ.</label>
                      <div className='Main-Border'></div>
                      <label>אמצעי תשלום:</label>
                      {PaymentData.map(item => (
                        <span className='Radio-Text' key={item.id}>
                          {item.label}
                          <input
                            type='radio'
                            value={'PaymentData'}
                            onChange={e => onChange(e, item.id)}
                            checked={item.selected}
                          />
                        </span>
                      ))}
                      <div className='Main-Border'></div>
                      <label>סך הכל לתשלום:</label>
                      <span className='calculation'>{CalculationData} ₪</span>
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
  TypeData,
  onChange,
  TimeData,
  PaymentData,
  CalculationData,
  firstname,
  lastname,
  SetData,
  id,
  Phone,
  onSubmit
}) => (
  <div className='Mobile'>
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>לקוח חדש</h2>
      <div className='FormClient'>
        <header className='Header-Client'>
          <h3>הוספת לקוח חדש</h3>
        </header>
        <div className='Alert-Position'></div>
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
          {TypeData.map(item => (
            <div className='Radio-Text' key={item.id}>
              {item.label}
              <input
                type='radio'
                value={'TypeData'}
                name='Type'
                onChange={e => onChange(e, item.id)}
                checked={item.selected}
              />
            </div>
          ))}
          <div className='Main-Border'></div>
          <label>תקופת מנוי:</label>
          {TimeData.map(item => (
            <div className='Radio-Text' key={item.id}>
              {item.label}
              <input
                type='radio'
                name='Time'
                value={'TimeData'}
                onChange={e => onChange(e, item.id)}
                checked={item.selected}
              />
            </div>
          ))}
          <div className='Main-Border'></div>
          <label>יגבה תשלום חד פעמי בעלות של 20 ₪ עבור צ'יפ.</label>
          <div className='Main-Border'></div>
          <label>אמצעי תשלום:</label>
          {PaymentData.map(item => (
            <span className='Radio-Text' key={item.id}>
              {item.label}
              <input
                type='radio'
                value={'PaymentData'}
                onChange={e => onChange(e, item.id)}
                checked={item.selected}
              />
            </span>
          ))}
          <div className='Main-Border'></div>
          <label>סך הכל לתשלום:</label>
          <span className='calculation'>{CalculationData} ₪</span>
          <div className='Main-Border'></div>
          <div className='Main-Padding'></div>
          <input type='submit' name='send' value='הוסף לקוח חדש' />
          <div className='Main-Padding'></div>
          <Alert />
        </form>
      </div>
    </main>
    <MobileFooter />
  </div>
);

NewClients.propType = {
  NclientSuccess: PropTypes.bool,
  SendSuccess: PropTypes.bool,
  SendFail: PropTypes.bool,
  setAlert: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  NclientSuccess: state.NclientReducer.NclientSuccess,
  SendSuccess: state.NclientReducer.SendSuccess,
  total: state.CalcReducer.total
});
export default connect(
  mapStateToProps,
  { Nclient, setAlert, CalcTotal }
)(NewClients);
