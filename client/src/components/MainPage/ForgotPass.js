import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Alert from '../layout/Alert';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/MainPages.css';
import logo from '../../img/logo.png';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainFooter from '../MainFooter';
// Mobile imports
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import { ResetPassword } from '../../actions/authAction';
const ForgotPass = ({ setAlert, ResetPassword }) => {
  const [Data, SetData] = useState({
    Email: '',
    Password: '',
    RePassword: ''
  });
  const { Email, Password, RePassword } = Data;
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (Password !== RePassword) {
      setAlert('סיסמאות לא תואמות', 'danger');
    } else {
      ResetPassword(Password, Email);
    }
    RestForm();
  };
  const RestForm = () => {
    SetData({ ...Data, Email: '', Password: '', RePassword: '' });
  };
  return (
    <div className='MainPage'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileForgotPass
          onSubmit={onSubmit}
          Email={Email}
          onChange={onChange}
          Password={Password}
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
              <div className='MainPage-title '>איפוס סיסמה</div>
              <Card id='Card-Height' className='Card-size'>
                <Card.Header>איפוס סיסמה</Card.Header>
                <Card.Body>
                  <FontAwesomeIcon className='Main-Icon' icon={faUnlockAlt} />
                  <header className='Main-Title'>איפוס סיסמא</header>
                  <form className='MainPage-Form' onSubmit={e => onSubmit(e)}>
                    <label>דואר אלקטרוני</label>
                    <input
                      type='text'
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
                      placeholder='סיסמא'
                    />
                    <label>אימות סיסמה</label>
                    <input
                      type='password'
                      name='RePassword'
                      value={RePassword}
                      onChange={e => onChange(e)}
                      placeholder='אימות סיסמא'
                    />
                    <div className='Alert'>
                      <Alert />
                    </div>
                    <input
                      className='PassButton'
                      type='submit'
                      name='Password'
                      value='איפוס סיסמה'
                    />
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
const MobileForgotPass = ({
  onSubmit,
  Email,
  Password,
  RePassword,
  onChange
}) => (
  <div className='Mobile'>
    <main className='main'>
      <div className='Mobile-container'>
        <div className='Mobile-content'>
          <div className='Mobile-Main-Title'>איפוס סיסמה</div>
          <Card className='Mobile-Card-size'>
            <Card.Header>איפוס סיסמה</Card.Header>
            <Card.Body>
              <FontAwesomeIcon
                className='Mobile-Main-Icon'
                icon={faUnlockAlt}
              />
              <header className='Main-Title'> איפוס סיסמה</header>
              <form className='Mobile-Form' onSubmit={e => onSubmit(e)}>
                <label>דואר אלקטרוני</label>
                <input
                  type='text'
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
                  placeholder='סיסמא'
                />
                <label>אימות סיסמה</label>
                <input
                  type='password'
                  name='RePassword'
                  value={RePassword}
                  onChange={e => onChange(e)}
                  placeholder='אימות סיסמא'
                />
                <div className='Main-Padding'></div>
                <Alert />
                <input
                  className='PassButton'
                  type='submit'
                  name='Password'
                  value='איפוס סיסמה'
                />

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
        </div>
      </div>
    </main>
    <MobileFooter />
  </div>
);
ForgotPass.propTypes = {
  setAlert: PropTypes.func,
  ResetPassword: PropTypes.func
};
export default connect(null, { setAlert, ResetPassword })(ForgotPass);
