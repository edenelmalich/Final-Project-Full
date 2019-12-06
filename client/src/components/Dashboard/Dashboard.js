import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import SubStat from './SubStat';
import NewSub from './NewSub';
// Css imports
import '../../css/CssFont.css';
import './Dashboard.css';
// import Link from react-router
import { Link } from 'react-router-dom';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faUserPlus,
  faUserClock,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
// Bootstrap imports
import { Card, Table } from 'react-bootstrap';
// import moment to get the days
import moment from 'moment';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { closeAlerts } from '../../actions/alertAction';
import { getClients } from '../../actions/newClientsAction';
import { closeAll } from '../../actions/navsAction';
const Dashboard = ({ getClientsList, getClients, closeAll, closeAlerts }) => {
  // ComponentWillMount
  useEffect(() => {
    closeAlerts();
    getClients();
    closeAll();
  }, []);
  return (
    <div className='Dashboard'>
      <MediaQuery maxDeviceWidth={900}>
        <MobileDash getClientsList={getClientsList} />
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
                        <Link to='/AllClients'>
                          <Card.Body>
                            <div className='DashBoard-Icon'>
                              <FontAwesomeIcon icon={faUser} size='3x' />
                            </div>
                            <div className='DashBoard-Text'>לקוחות</div>

                            <div className='DashBoard-Text-info'>
                              {getClientsList.length}
                            </div>
                          </Card.Body>
                        </Link>
                      </Card>
                      <Card id='DashNewClient'>
                        <a href='#NewClients'>
                          <Card.Body>
                            <div className='DashBoard-Icon'>
                              <FontAwesomeIcon icon={faUserPlus} size='3x' />
                            </div>

                            <div className='DashBoard-Text'>
                              <span>לקוחות חדשים</span>
                            </div>
                            <div className='DashBoard-Text-info'>4</div>
                          </Card.Body>
                        </a>
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
                              {getClientsList.map(client => (
                                <tr key={client.id}>
                                  <td>{client.firstname}</td>
                                  <td>{client.lastname}</td>
                                  <td>{client.id}</td>
                                  <td>{client.phone}</td>
                                  <td>{client.Type}</td>
                                  <td>{client.Time}</td>
                                  <td>{client.Payment}</td>
                                  <td>{client.Total}</td>
                                  <td>
                                    {moment(client.date).format('YYYY/MM/DD')}
                                  </td>
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
const MobileDash = ({ getClientsList }) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>סקירה כללית</h2>
      <div className='Mobile-Dash-Box-Att'>
        <Card id='DashClient' className='Dash-Card-Size'>
          <Link to='/AllClients'>
            <FontAwesomeIcon id='Mobile-icon' icon={faUser} size='3x' />

            <div className='Mobile-DashBoard-Text'>לקוחות</div>
          </Link>
          <div className='Mobile-DashBoard-Text-info'>
            {getClientsList.length}
          </div>
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
                {getClientsList.map(client => (
                  <tr key={client.id}>
                    <td>{client.firstname}</td>
                    <td>{client.lastname}</td>
                    <td>{client.id}</td>
                    <td>{client.phone}</td>
                    <td>{client.Type}</td>
                    <td>{client.Time}</td>
                    <td>{client.Payment}</td>
                    <td>{client.Total}</td>
                    <td> {moment(client.date).format('YYYY/MM/DD')}</td>
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
  getClientsList: PropTypes.array,
  getClients: PropTypes.func,
  closeAll: PropTypes.func,
  closeAlerts: PropTypes.func
};
const mapStateToProps = state => ({
  getClientsList: state.newClientsReducer.getClientsList,
  mobileToggleState: state.NavReducer.mobileToggleState
});
export default connect(mapStateToProps, {
  getClients,
  closeAll,
  closeAlerts
})(Dashboard);
