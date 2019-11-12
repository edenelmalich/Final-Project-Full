import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../css/CssFont.css';
import './Dashboard.css';

import { Card, Table } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppFooter from '../AppFooter';
import SubStat from './SubStat';
import NewSub from './NewSub';
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
      <MediaQuery maxDeviceWidth={1000}>
        <MobileDash getClients={getClients} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>סקירה כללית</h2>
                  <div className='DashBoard-Margin'>
                    <div className='Dash-Box-Att'>
                      <Card id='DashClient'>
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

                      <Card id='DashNewClient'>
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
                      <Card id='DashSub'>
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
                      <Card id='DashSubStat'>
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
                        <SubStat />
                      </div>
                      <div className='BoxStat'>
                        <div className='BoxTitle'>סטטיסטיקת חידוש מנויים</div>
                        <NewSub />
                      </div>
                    </div>
                    <div className='Dash-Table'>
                      <Card id='Card-size'>
                        <div className='BoxTitle'>מתאמנים חדשים</div>
                        <Card.Body>
                          <Table
                            id='NewClients'
                            striped
                            bordered
                            hover
                            size='sm'
                          >
                            <thead>
                              <tr>
                                <th>שם פרטי</th>
                                <th>שם משפחה</th>
                                <th>תעודת זהות</th>
                                <th>טלפון</th>
                                <th>סוג מנוי</th>
                                <th>תקופת מנוי</th>
                                <th>אמצעי תשלום</th>
                                <th>סה"כ לתשלום</th>
                                <th>תאריך הרשמה</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getClients.map(client => (
                                <tr key={client.id}>
                                  <td>{client.firstname}</td>
                                  <td>{client.lastname}</td>
                                  <td>{client.id}</td>
                                  <td>{client.phone}</td>
                                  <td>{client.Type}</td>
                                  <td>{client.Time}</td>
                                  <td>{client.Payment}</td>
                                  <td>{client.Total}</td>
                                  <td>{client.date}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </div>
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
          {/* <div className='Mobile-BoxTitle'>סטטיסטיקת מנויים</div> */}
          <SubStat />
        </Card>
        <Card bg='light' id='Dash-card-Stat'>
          {/* <div className='Mobile-BoxTitle'>סטטיסטיקת חידוש מנויים</div> */}
          <NewSub />
        </Card>
      </div>
      <div className='Dash-Table'>
        <Card id='Table-Card-size'>
          <div className='Mobile-BoxTitle'>מתאמנים חדשים</div>
          <Card.Body>
            <Table id='NewClients' striped bordered hover size='sm'>
              <thead>
                <tr>
                  <th>שם פרטי</th>
                  <th>שם משפחה</th>
                  <th>תעודת זהות</th>
                  <th>טלפון</th>
                  <th>סוג מנוי</th>
                  <th>תקופת מנוי</th>
                  <th>אמצעי תשלום</th>
                  <th>סה"כ לתשלום</th>
                  <th>תאריך הרשמה</th>
                </tr>
              </thead>
              <tbody>
                {getClients.map(client => (
                  <tr key={client.id}>
                    <td>{client.firstname}</td>
                    <td>{client.lastname}</td>
                    <td>{client.id}</td>
                    <td>{client.phone}</td>
                    <td>{client.Type}</td>
                    <td>{client.Time}</td>
                    <td>{client.Payment}</td>
                    <td>{client.Total}</td>
                    <td>{client.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
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
