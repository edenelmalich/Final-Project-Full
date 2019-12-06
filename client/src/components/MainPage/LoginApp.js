import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components imports
import MainFooter from '../MainFooter';
import Alert from '../layout/Alert';
// Css imports
import '../../css/MainPages.css';
// logo imports
import logo from '../../img/logo.png';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as FasUser } from '@fortawesome/free-regular-svg-icons';
// import Link from react-router
import { Link, Redirect } from 'react-router-dom';
// Bootstrap imports
import { Card } from 'react-bootstrap';
// Mobile imports
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { login } from '../../actions/authAction';

const LoginApp = ({ isAuth, login }) => {
  // useState
  const [Data, SetData] = useState({
    Email: '',
    Password: ''
  });
  const { Email, Password } = Data;
  const [typeState, setType] = useState(false);
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(Email, Password);
  };

  if (isAuth) {
    return <Redirect to='Dashboard' />;
  }

  return (
    <div className='MainPage'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileLogin
          Email={Email}
          Password={Password}
          onSubmit={onSubmit}
          onChange={onChange}
          setType={setType}
          typeState={typeState}
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
              <div className='MainPage-title '>התחברות ל-Maxfit</div>

              <Card className='Card-size'>
                <Card.Header>התחברות</Card.Header>
                <Card.Body>
                  <FontAwesomeIcon className='Main-Icon' icon={FasUser} />
                  <header className='Main-Title'> התחברות</header>

                  <form className='MainPage-Form' onSubmit={e => onSubmit(e)}>
                    <label> דואר אלקטרוני</label>
                    <input
                      type='text'
                      name='Email'
                      value={Email}
                      onChange={e => onChange(e)}
                      placeholder='דואר אלקטרוני'
                    />
                    <label> סיסמה</label>
                    <input
                      type={typeState ? 'text' : 'password'}
                      name='Password'
                      value={Password}
                      onChange={e => onChange(e)}
                      placeholder='סיסמה'
                    />
                    <label> הצג סיסמה</label>
                    <input
                      type='checkbox'
                      onClick={() => setType(!typeState)}
                    />
                    <div className='Alert'>
                      <Alert />
                    </div>
                    <input type='submit' name='Password' value='התחברות' />
                    <div className='Main-Border'></div>
                    <div className='Button-content '>
                      <div className='LoginApp-text'>
                        <Link to='/forgotPass'>שכחת את הסיסמה?</Link>
                      </div>
                      <div className='LoginApp-text'>
                        איך לך משתמש?
                        <span className='Link-Color'>
                          <Link to='/registerApp' className='RegistarButton'>
                            הירשם כעת
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
const MobileLogin = ({
  Email,
  Password,
  onSubmit,
  onChange,
  setType,
  typeState
}) => (
  <div className='Mobile'>
    <main className='main'>
      <div className='Mobile-Main-Title '>התחברות ל-Maxfit</div>

      <Card className='Mobile-Card-size'>
        <Card.Header>התחברות</Card.Header>
        <Card.Body>
          <FontAwesomeIcon className='Mobile-Main-Icon' icon={FasUser} />
          <header className='Main-Title'> התחברות</header>
          <form className='Mobile-Form' onSubmit={e => onSubmit(e)}>
            <label> דואר אלקטרוני</label>
            <input
              type='text'
              name='Email'
              value={Email}
              onChange={e => onChange(e)}
              placeholder='דואר אלקטרוני'
            />
            <label> סיסמה</label>
            <input
              type={typeState ? 'text' : 'password'}
              name='Password'
              value={Password}
              onChange={e => onChange(e)}
              placeholder='סיסמה'
            />
            <label> הצג סיסמה</label>
            <input type='checkbox' onClick={() => setType(!typeState)} />
            <div className='Main-Padding'></div>
            <Alert />
            <input type='submit' name='Password' value='התחברות' />
            <div className='Main-Border'></div>
            <div className='Mobile-Button-content '>
              <div className='Mobile-LoginApp-text'>
                <Link to='/forgotPass'>שכחת את הסיסמה?</Link>
              </div>
              <div className='Mobile-LoginApp-text'>
                איך לך משתמש?
                <span className='Link-Color'>
                  <Link to='/registerApp' className='RegistarButton'>
                    הירשם כעת
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
LoginApp.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});
export default connect(mapStateToProps, { login })(LoginApp);
