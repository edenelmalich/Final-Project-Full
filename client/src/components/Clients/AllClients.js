import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Table, Card } from 'react-bootstrap';
import moment from 'moment';
import PropTypes from 'prop-types';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import AppFooter from '../AppFooter';
import { GetClients } from '../../actions/NclientAction';
import { closeAll } from '../../actions/NavAction';
const AllClients = ({ GetClients, clientsList, closeAll }) => {
  useEffect(() => {
    GetClients();
    closeAll();
  }, []);

  return (
    <div className='Clients'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileClients clientsList={clientsList} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>לקוחות</h2>

                  <div className='Card-Pages'>
                    <Card id='Clients-Card-size'>
                      <div className='Card-Title'> רשימת לקוחות</div>
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
                            {clientsList.map(client => (
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
          </main>
          <AppFooter />
        </div>
      </MediaQuery>
    </div>
  );
};
const MobileClients = ({ clientsList }) => (
  <div className='Mobile'>
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>לקוחות</h2>
      <div className='Client-card'>
        <Card>
          <Card.Body>
            <div className='TableText'>רשימת לקוחות</div>
            <Table striped bordered hover size='sm'>
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
                {clientsList.map(client => (
                  <tr key={client.id}>
                    <td>{client.firstname}</td>
                    <td>{client.lastname}</td>
                    <td>{client.id}</td>
                    <td>{client.phone}</td>
                    <td>{client.Type}</td>
                    <td>{client.Time}</td>
                    <td>{client.Payment}</td>
                    <td>{client.Total}</td>
                    <td>{moment(client.date).format('YYYY/MM/DD')}</td>
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
AllClients.propTypes = {
  clientsList: PropTypes.array,
  GetClients: PropTypes.func,
  closeAll: PropTypes.func
};
const mapStateToProps = state => ({
  clientsList: state.NclientReducer.clientsList
});
export default connect(mapStateToProps, { GetClients, closeAll })(AllClients);
