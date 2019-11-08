import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import './NewClients.css';
import PropTypes from 'prop-types';
import { Nclient } from '../../actions/NclientAction';
import Alert from '../layout/Alert';

// Redux
import { connect } from 'react-redux';
const NewClients = ({ Nclient }) => {
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
    SetCalculation(CalcType.CalcType * CalcTime.CalcTime);
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
  };
  return (
    <div className='Nclients'>
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
                  <div className='Main-Padding'></div>
                  <div className='Alert-Position'>
                    <Alert />
                  </div>
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
NewClients.propType = {
  NclientSuccess: PropTypes.bool
};
const mapStateToProps = state => ({
  NclientSuccess: state.NclientReducer.NclientSuccess
});
export default connect(
  mapStateToProps,
  { Nclient }
)(NewClients);
