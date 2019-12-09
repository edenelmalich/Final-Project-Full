import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import ClientsModal from './ClientsModal';
// Css imports
import '../../css/CssFont.css';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as FarEye } from '@fortawesome/free-regular-svg-icons';
// Bootstrap imports
import { Table, Card } from 'react-bootstrap';
// import moment to get the days
import moment from 'moment';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { getClients } from '../../actions/newClientsAction';
import { closeAll } from '../../actions/navsAction';
import { closeAlerts } from '../../actions/alertAction';
import { setModalToggle } from '../../actions/modalActions';

const AllClients = ({
  getClients,
  getClientsList,
  closeAll,
  closeAlerts,
  getModalState,
  setModalToggle
}) => {
  // ComponentWillMount
  useEffect(() => {
    closeAlerts();
    getClients();
    closeAll();
  }, [getModalState]);
  // useState
  const [clientData, setClientData] = useState();

  const getId = id => {
    setClientData(id);
    setModalToggle(getModalState);
  };

  return (
    <div className='Clients'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileClients
          getClientsList={getClientsList}
          getId={getId}
          clientData={clientData}
          setModalToggle={setModalToggle}
          getModalState={getModalState}
        />
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
                              <th>הצג לקוח</th>
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
                                <td>
                                  <FontAwesomeIcon
                                    icon={FarEye}
                                    onClick={() => getId(client._id)}
                                  />
                                  <ClientsModal
                                    show={getModalState}
                                    onHide={() => setModalToggle(getModalState)}
                                    getclientslist={getClientsList}
                                    clientdata={clientData}
                                  />
                                </td>
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
const MobileClients = ({
  getClientsList,
  getId,
  getModalState,
  setModalToggle,
  clientData
}) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>לקוחות</h2>
      <div className='Client-card'>
        <Card>
          <Card.Body>
            <div className='TableText'>רשימת לקוחות</div>
            <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  <th>הצג לקוח</th>
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
                    <td>
                      <FontAwesomeIcon
                        icon={FarEye}
                        onClick={() => getId(client._id)}
                      />
                      <ClientsModal
                        show={getModalState}
                        onHide={() => setModalToggle(false)}
                        getclientslist={getClientsList}
                        clientdata={clientData}
                      />
                    </td>
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
  getClientsList: PropTypes.array,
  getClients: PropTypes.func.isRequired,
  closeAll: PropTypes.func.isRequired,
  closeAlerts: PropTypes.func.isRequired,
  getModalState: PropTypes.bool.isRequired,
  setModalToggle: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  getClientsList: state.newClientsReducer.getClientsList,
  getModalState: state.modalReducer.getModalState
});
export default connect(mapStateToProps, {
  getClients,
  closeAll,
  closeAlerts,
  setModalToggle
})(AllClients);
