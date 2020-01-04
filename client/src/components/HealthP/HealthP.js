import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import HealthModal from './HealthModal';
// Bootstrap imports
import { Card, Table, Button } from 'react-bootstrap';
// import moment to get the days
import moment from 'moment';
// Font awesome icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as FarEye } from '@fortawesome/free-regular-svg-icons';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { closeAll } from '../../actions/navsAction';
import { closeAlerts } from '../../actions/alertAction';
import { setDocuments } from '../../actions/healthAction';
import { setModalToggle } from '../../actions/modalActions';

const HealthP = ({
  closeAll,
  closeAlerts,
  getDocuments,
  setDocuments,
  getModalState,
  setModalToggle
}) => {
  // ComponentWillMount
  useEffect(() => {
    closeAll();
    closeAlerts();
    setDocuments();
  }, []);
  const [getData, setData] = useState();
  const [getClientName, setClientName] = useState({
    clientName: '',
    findState: false
  });
  const [findList, setFindList] = useState([]);
  const getId = id => {
    setData(id);
    setModalToggle(getModalState);
  };
  const onChange = e => {
    setClientName({ ...getClientName, [e.target.name]: e.target.value });
  };
  const searchClient = e => {
    e.preventDefault();
    if (clientName !== '') {
      setClientName({ ...getClientName, findState: true });
      setFindList(
        getDocuments.filter(
          client =>
            clientName === client.firstName ||
            clientName === client.lastName ||
            clientName === client.firstName + ' ' + client.lastName
        )
      );
    } else {
      setClientName({ ...getClientName, findState: false });
    }
  };
  const { clientName, findState } = getClientName;
  const ClientList = findState ? findList : getDocuments;
  return (
    <div className='Healthp'>
      <MediaQuery maxDeviceWidth={1000}>
        <MobileHealth />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <Navbar />
        <div className='Page-Container'>
          <main className='main'>
            <div className='Pages-Content'>
              <div className='Att-PagesContent'>
                <div className='PagesContainer'>
                  <h2>הצהרות בריאות</h2>
                  <div className='Card-Pages'>
                    <Card id='Health-Card-size'>
                      <div className='Card-Title'>הצהרות בריאות</div>
                      <Card.Body>
                        <form className='Form-Search'>
                          <input
                            type='text'
                            name='clientName'
                            value={clientName}
                            onChange={e => onChange(e)}
                            placeholder=' חפש הצהרת בריאות...'
                          />
                          <Button
                            variant='outline-dark'
                            onClick={e => searchClient(e)}
                          >
                            חפש
                          </Button>
                          <div className='Main-Padding'></div>
                        </form>
                        <Table id='NewClients' striped bordered hover size='sm'>
                          <thead>
                            <tr>
                              <th>הצג הצהרת בריאות</th>
                              <th>שם פרטי</th>
                              <th>שם משפחה</th>
                              <th>הצהרת בריאות</th>
                              <th>תאריך שליחה</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ClientList.map(client => (
                              <tr key={client._id}>
                                <td>
                                  <FontAwesomeIcon
                                    icon={FarEye}
                                    onClick={() => getId(client._id)}
                                  />
                                  <HealthModal
                                    show={getModalState}
                                    onHide={() => setModalToggle(getModalState)}
                                    getdocuments={getDocuments}
                                    getdata={getData}
                                  />
                                </td>
                                <td>{client.firstName}</td>
                                <td>{client.lastName}</td>
                                <td>{client.documentsText}</td>
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

const MobileHealth = () => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>הצהרות בריאות</h2>
      <Card id='Health-Card-size'>
        <div className='Card-Title'>הצהרות בריאות</div>
        <Card.Body></Card.Body>
      </Card>
    </main>
    <MobileFooter />
  </div>
);
HealthP.propTypes = {
  closeAlerts: PropTypes.func.isRequired,
  closeAll: PropTypes.func.isRequired,
  setDocuments: PropTypes.func.isRequired,
  getDocuments: PropTypes.array,
  setModalToggle: PropTypes.func.isRequired,
  getModalState: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  getDocuments: state.healthReducer.getDocuments,
  getModalState: state.modalReducer.getModalState
});
export default connect(mapStateToProps, {
  closeAll,
  closeAlerts,
  setDocuments,
  setModalToggle
})(HealthP);
