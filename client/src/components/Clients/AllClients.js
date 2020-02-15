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
import { Table, Card, Button } from 'react-bootstrap';
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
  const [getClientName, setClientName] = useState({
    clientName: '',
    findState: false
  });
  const [findList, setFindList] = useState([]);
  const getId = id => {
    setClientData(id);
    setModalToggle(getModalState);
  };
  const searchClient = e => {
    e.preventDefault();
    if (clientName !== '') {
      setClientName({ ...getClientName, findState: true });
      setFindList(
        getClientsList.filter(
          client =>
            clientName === client.firstname ||
            clientName === client.lastname ||
            clientName === client.firstname + ' ' + client.lastname
        )
      );
    } else {
      setClientName({ ...getClientName, findState: false });
    }
  };
  const onChange = e => {
    setClientName({ ...getClientName, [e.target.name]: e.target.value });
  };
  const { clientName, findState } = getClientName;
  const ClientList = findState ? findList : getClientsList;
  return (
    <div className='Clients'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileClients
          getClientsList={getClientsList}
          getId={getId}
          clientData={clientData}
          setModalToggle={setModalToggle}
          getModalState={getModalState}
          clientName={clientName}
          onChange={onChange}
          searchClient={searchClient}
          ClientList={ClientList}
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
                      <div className='Card-Title'>
                        <form className='Form-Search'>
                          <input
                            type='text'
                            name='clientName'
                            value={clientName}
                            onChange={e => onChange(e)}
                            placeholder=' הכנס שם לקוח...'
                          />
                          <Button
                            variant='outline-dark'
                            onClick={e => searchClient(e)}
                          >
                            חפש לקוח
                          </Button>
                          <div className='Main-Padding'></div>
                        </form>
                      </div>
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
                            {ClientList.map(client => (
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
  clientData,
  clientName,
  onChange,
  searchClient,
  ClientList
}) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>לקוחות</h2>
      <div className='Client-card'>
        <Card>
          <div className='Card-Title'>
            <form className='Form-Search'>
              <input
                type='text'
                name='clientName'
                value={clientName}
                onChange={e => onChange(e)}
                placeholder=' הכנס שם לקוח...'
              />
              <Button variant='outline-dark' onClick={e => searchClient(e)}>
                חפש לקוח
              </Button>
              <div className='Main-Padding'></div>
            </form>
          </div>
          <Card.Body>
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
                {ClientList.map(client => (
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
