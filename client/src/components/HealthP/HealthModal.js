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
import { deleteHealthClient } from '../../actions/healthAction';
import { setModalToggle } from '../../actions/modalActions';
const HealthModal = props => {
  const {
    deleteHealthClient,
    getdocuments,
    getdata,
    setModalToggle,
    getModalState
  } = props;

  // Functions
  const Delete = id => {
    deleteHealthClient(id);
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
            פרטי הצהרת בריאות
          </Modal.Title>
        </Modal.Header>
        <div className='Alert-Delete'>
          <Alert />
        </div>
        <Modal.Body>
          {getdocuments.map(client => (
            <div key={client._id}>
              {client._id === getdata ? (
                <div>
                  <header className='modal-Header'>
                    {client.firstName} {client.lastName}
                  </header>
                  <div className='Modal-content'>
                    <div className='clientsDetails'>הצהרת בריאות:</div>
                    <div className='clientsValues'>{client.documentsText}</div>

                    <div className='clientsDetails'> תאריך שליחה:</div>
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
          <Button onClick={() => Delete(getdata)} variant='outline-danger'>
            מחק הצהרת בריאות
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
HealthModal.propTypes = {
  getclientslist: PropTypes.array,
  deleteHealthClient: PropTypes.func.isRequired,
  getModalState: PropTypes.bool.isRequired,
  setModalToggle: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  getModalState: state.modalReducer.getModalState
});
export default connect(mapStateToProps, { deleteHealthClient, setModalToggle })(
  HealthModal
);
