import React, { useState } from 'react';
import logo from '../../img/logo.png';
import '../../css/MainPages.css';
import { faAddressCard as FasAddressCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Card } from 'react-bootstrap';
import MainFooter from '../MainFooter';
import Alert from '../layout/Alert';
// Mobile imports
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import { register } from '../../actions/authAction';

const Register = ({ setAlert, register, isAuth }) => {
  const [Data, SetData] = useState({
    Name: '',
    Email: '',
    Password: '',
    RePassword: ''
  });

  const { Name, Email, Password, RePassword } = Data;
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (Password !== RePassword) {
      setAlert('סיסמאות לא תואמות', 'danger');
    } else {
      register(Name, Email, Password);
    }
  };
  // if (isAuth) {
  //   return <Redirect to='/LoginApp' />;
  // }
  return (
    <div className='MainPage'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileRegister
          onChange={onChange}
          Password={Password}
          onSubmit={onSubmit}
          Name={Name}
          Email={Email}
          RePassword={RePassword}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <header>
          <div className='MainPage-Header'>
            <div className='MainPage-logo'>
              <img src={logo} alt='Logo' />
            </div>
          </div>
        </header>
        <main className='main'>
          <div className='MainPage-container'>
            <div className='MainPage-content '>
              <div className='MainPage-title '>הרשמה ל-Maxfit</div>
              <Card id='Card-Height' className='Card-size'>
                <Card.Header>הרשמה</Card.Header>
                <Card.Body>
                  <FontAwesomeIcon
                    className='Main-Icon'
                    icon={FasAddressCard}
                  />
                  <header className='Main-Title'>הרשמה</header>
                  <div className='Alert-Position'>
                    <Alert />
                  </div>
                  <form className='MainPage-Form' onSubmit={e => onSubmit(e)}>
                    <label> שם מלא</label>
                    <input
                      type='text'
                      name='Name'
                      value={Name}
                      onChange={e => onChange(e)}
                      placeholder='שם מלא'
                    />
                    <label> דואר אלקטרוני</label>
                    <input
                      type='email'
                      name='Email'
                      value={Email}
                      onChange={e => onChange(e)}
                      placeholder='דואר אלקטרוני'
                    />
                    <label> סיסמה</label>

                    <input
                      type='password'
                      name='Password'
                      value={Password}
                      onChange={e => onChange(e)}
                      placeholder='סיסמה'
                    />
                    <label>אימות סיסמה</label>
                    <input
                      type='password'
                      name='RePassword'
                      value={RePassword}
                      onChange={e => onChange(e)}
                      placeholder='אימות סיסמה'
                    />
                    <input type='submit' name='register' value='הרשמה' />
                    <div className='Main-Border'></div>
                    <div className='Button-content '>
                      <div className='LoginApp-text'>
                        משתמש רשום?
                        <span className='Link-Color'>
                          <Link to='/LoginApp' className='RegistarButton'>
                            התחבר
                          </Link>
                        </span>
                      </div>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </main>
        <MainFooter />
      </MediaQuery>
    </div>
  );
};
const MobileRegister = ({
  onChange,
  onSubmit,
  Password,
  Name,
  Email,
  RePassword
}) => (
  <div className='Mobile'>
    <header>
      <div className='Mobile-Header'>
        <img src={logo} alt='Logo' id='Mobile-img' />
      </div>
    </header>
    <main className='main'>
      <div className='Mobile-Main-Title '>הרשמה ל-Maxfit</div>
      <Card className='Mobile-Card-size'>
        <Card.Header>הרשמה</Card.Header>
        <Card.Body>
          <FontAwesomeIcon className='Mobile-Main-Icon' icon={FasAddressCard} />
          <header className='Main-Title'> הרשמה</header>
          <form className='Mobile-Form' onSubmit={e => onSubmit(e)}>
            <label> שם מלא</label>
            <input
              type='text'
              name='Name'
              value={Name}
              onChange={e => onChange(e)}
              placeholder='שם מלא'
            />
            <label> דואר אלקטרוני</label>
            <input
              type='email'
              name='Email'
              value={Email}
              onChange={e => onChange(e)}
              placeholder='דואר אלקטרוני'
            />
            <label> סיסמה</label>

            <input
              type='password'
              name='Password'
              value={Password}
              onChange={e => onChange(e)}
              placeholder='סיסמה'
            />
            <label>אימות סיסמה</label>
            <input
              type='password'
              name='RePassword'
              value={RePassword}
              onChange={e => onChange(e)}
              placeholder='אימות סיסמה'
            />
            <input type='submit' name='register' value='הרשמה' />
            <div className='Main-Border'></div>
            <div className='Mobile-Button-content '>
              <div className='Mobile-LoginApp-text'>
                משתמש רשום?
                <span className='Link-Color'>
                  <Link to='/LoginApp' className='RegistarButton'>
                    התחבר
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </main>
    <MobileFooter />
  </div>
);
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});
export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
