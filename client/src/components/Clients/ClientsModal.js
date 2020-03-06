import React from 'react';
import PropTypes from 'prop-types';
// Components
import Alert from '../layout/Alert';
// css imports
import '../../css/CssFont.css';
// import moment to get the days
import moment from 'moment';
// Bootstrap imports
import { Modal, Button } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
import { deleteclient } from '../../actions/newClientsAction';
import { setModalToggle } from '../../actions/modalActions';
const ClientsModal = props => {
  const {
    deleteclient,
    getclientslist,
    clientdata,
    setModalToggle,
    getModalState
  } = props;

  // Functions
  const Delete = id => {
    deleteclient(id);
    setTimeout(() => {
      setModalToggle(getModalState);
    }, 2000);
  };

  return (
    <div className='ClientsModal'>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            פרטי לקוח
          </Modal.Title>
        </Modal.Header>
        <div className='Alert-Delete'>
          <Alert />
        </div>
        <Modal.Body>
          {getclientslist.map(client => (
            <div key={client._id}>
              {client._id === clientdata ? (
                <div>
                  <header className='modal-Header'>{client.Name}</header>
                  <div className='Modal-content'>
                    <div className='clientsDetails'>תעודת זהות:</div>
                    <div className='clientsValues'>{client.clientId}</div>
                    <div className='clientsDetails'>טלפון:</div>
                    <div className='clientsValues'>{client.phone}</div>
                    <div className='clientsDetails'>סוג מנוי:</div>
                    <div className='clientsValues'>{client.Type}</div>
                    <div className='clientsDetails'>תקופת מנוי:</div>
                    <div className='clientsValues'>{client.Time}</div>
                    <div className='clientsDetails'> אמצעי תשלום:</div>
                    <div className='clientsValues'>{client.Payment}</div>
                    <div className='clientsDetails'> סה"כ תשלום:</div>
                    <div className='clientsValues'>{client.Total}₪</div>
                    <div className='clientsDetails'> תאריך הצטרפות:</div>
                    <div className='clientsValues'>
                      {moment(client.date).format('YYYY/MM/DD')}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => Delete(clientdata)} variant='outline-danger'>
            מחק לקוח
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
ClientsModal.propTypes = {
  getclientslist: PropTypes.array,
  deleteclient: PropTypes.func.isRequired,
  getModalState: PropTypes.bool.isRequired,
  setModalToggle: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  getModalState: state.modalReducer.getModalState
});
export default connect(mapStateToProps, { deleteclient, setModalToggle })(
  ClientsModal
);
