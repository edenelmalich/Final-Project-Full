import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../css/CssFont.css';
import './Dashboard.css';

import { Card, Table } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppFooter from '../AppFooter';
import {
  faUser,
  faUserPlus,
  faUserClock,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import { GetClients } from '../../actions/NclientAction';
import { closeAll } from '../../actions/NavAction';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';

const Dashboard = ({ getClients, GetClients, closeAll }) => {
  useEffect(() => {
    GetClients();
    closeAll();
  }, []);
  return (
    <div className='Dashboard'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileDash getClients={getClients} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>סקירה כללית</h2>
                  <div className='DashBoard-Margin'>
                    <div className='Dash-Box-Att'>
                      <Card id='DashClient' style={{ width: '15rem' }}>
                        <Card.Body>
                          <Link to='/AllClients'>
                            <div className='DashBoard-Icon'>
                              <FontAwesomeIcon icon={faUser} size='3x' />
                            </div>
                            <div className='DashBoard-Text'>לקוחות</div>
                          </Link>
                          <div className='DashBoard-Text-info'>
                            {getClients.length}
                          </div>
                        </Card.Body>
                      </Card>

                      <Card id='DashNewClient' style={{ width: '15rem' }}>
                        <Card.Body>
                          <a href='#NewClients'>
                            <div className='DashBoard-Icon'>
                              <FontAwesomeIcon icon={faUserPlus} size='3x' />
                            </div>
                          </a>
                          <div className='DashBoard-Text'>
                            <span>לקוחות חדשים</span>
                          </div>
                          <div className='DashBoard-Text-info'>4</div>
                        </Card.Body>
                      </Card>
                      <Card id='DashSub' style={{ width: '15rem' }}>
                        <Card.Body>
                          <div className='DashBoard-Icon'>
                            <FontAwesomeIcon icon={faUserClock} size='3x' />
                          </div>
                          <div className='DashBoard-Text'>
                            <span>חידוש מנויים</span>
                          </div>
                          <div className='DashBoard-Text-info'>2</div>
                        </Card.Body>
                      </Card>
                      <Card id='DashSubStat' style={{ width: '15rem' }}>
                        <Card.Body>
                          <div className='DashBoard-Icon'>
                            <FontAwesomeIcon icon={faChartBar} size='3x' />
                          </div>
                          <div className='DashBoard-Text'>
                            <span>סטטיסטיקת מנויים</span>
                          </div>
                          <div className='DashBoard-Text-info'>4.5</div>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='Dash-Box-Att'>
                      <div className='BoxStat'>
                        <div className='BoxTitle'>סטטיסטיקת מנויים</div>
                      </div>
                      <div className='BoxStat'>
                        <div className='BoxTitle'>סטטיסטיקת חידוש מנויים</div>
                      </div>
                    </div>
                    <Card id='Card-size' style={{ width: '68rem' }}>
                      <div className='BoxTitle'>מתאמנים חדשים</div>
                      <Card.Body>
                        <Table id='NewClients' striped bordered hover size='sm'>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>שם פרטי</th>
                              <th>שם משפחה</th>
                              <th>דואר אלקטרוני</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>עדן</td>
                              <td>אלמליח</td>
                              <td>eelmalich2@gmail.com</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td colSpan='2'>Larry the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
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
const MobileDash = ({ getClients }) => (
  <div className='Mobile'>
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>סקירה כללית</h2>
      <div className='Mobile-Dash-Box-Att'>
        <Card id='DashClient' className='Dash-Card-Size'>
          <Link to='/AllClients'>
            <FontAwesomeIcon id='Mobile-icon' icon={faUser} size='3x' />

            <div className='Mobile-DashBoard-Text'>לקוחות</div>
          </Link>
          <div className='Mobile-DashBoard-Text-info'>{getClients.length}</div>
        </Card>

        <Card id='DashNewClient' className='Dash-Card-Size'>
          <a href='#NewClients'>
            <FontAwesomeIcon id='Mobile-icon' icon={faUserPlus} size='3x' />
          </a>
          <div className='Mobile-DashBoard-Text'>לקוחות חדשים</div>
          <div className='Mobile-DashBoard-Text-info'>4</div>
        </Card>
        <Card id='DashSub' className='Dash-Card-Size'>
          <FontAwesomeIcon id='Mobile-icon' icon={faUserClock} size='3x' />

          <div className='Mobile-DashBoard-Text'>חידוש מנויים</div>
          <div className='Mobile-DashBoard-Text-info'>2</div>
        </Card>
        <Card id='DashSubStat' className='Dash-Card-Size'>
          <FontAwesomeIcon id='Mobile-icon' icon={faChartBar} size='3x' />

          <div className='Mobile-DashBoard-Text'>סטטיסטיקת מנויים</div>
          <div className='Mobile-DashBoard-Text-info'>4.5</div>
        </Card>
      </div>
      <div className='Mobile-Dash-Box-Att'>
        <Card bg='light' id='Dash-card-Stat'>
          <div className='Mobile-BoxTitle'>סטטיסטיקת מנויים</div>
        </Card>
        <Card bg='light' id='Dash-card-Stat'>
          <div className='Mobile-BoxTitle'>סטטיסטיקת חידוש מנויים</div>
        </Card>
      </div>
      <div className='Mobile-Dash-Box-Att'>
        <Card id='Table-Card-size'>
          <div className='Mobile-BoxTitle'>מתאמנים חדשים</div>
          <Table id='NewClients' striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>שם פרטי</th>
                <th>שם משפחה</th>
                <th>דואר אלקטרוני</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>עדן</td>
                <td>אלמליח</td>
                <td>eelmalich2@gmail.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan='2'>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </main>
    <MobileFooter />
  </div>
);
Dashboard.propTypes = {
  getClients: PropTypes.array
};
const mapStateToProps = state => ({
  getClients: state.NclientReducer.getClients
});
export default connect(
  mapStateToProps,
  { GetClients, closeAll }
)(Dashboard);
