import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Table, Card } from 'react-bootstrap';
import { GetClients } from '../../actions/NclientAction';
// Mobile imports
import '../../css/Mobile.css';
import MobileNav from '../Mobile/MobileNav';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import AppFooter from '../AppFooter';
const AllClients = ({ GetClients, getClients }) => {
  useEffect(() => {
    GetClients();
  }, []);

  return (
    <div className='Clients'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileClients getClients={getClients} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>לקוחות</h2>
                  <div className='Flex-Pages'>
                    <div className='FormData'>
                      <header className='header-Form'>
                        <h3>לקוחות</h3>
                      </header>
                      <div className='Main-Padding'></div>
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
const MobileClients = ({ getClients }) => (
  <div className='Mobile'>
    <MobileNav />
    <main className='main'>
      <h2 id='Mobile-text'>לקוחות</h2>
      <Card id='Table-Clients-Card-size' style={{ width: '100%' }}>
        <Card.Body>
          <div className='Mobile-BoxTitle'>מתאמנים חדשים</div>
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
    </main>
    <MobileFooter />
  </div>
);
const mapStateToProps = state => ({
  getClients: state.NclientReducer.getClients
});
export default connect(
  mapStateToProps,
  { GetClients }
)(AllClients);
