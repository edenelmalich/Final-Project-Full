import React from 'react';
import PropTypes from 'prop-types';
// css imports
import '../../css/CssFont.css';
// import moment to get the days
import moment from 'moment';
// Bootstrap imports
import { Modal } from 'react-bootstrap';
const ClientsModal = props => {
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
        <Modal.Body>
          {props.getclientslist.map(client => (
            <div key={client.id}>
              {client.id === props.clientdata ? (
                <div>
                  <header className='modal-Header'>
                    {client.firstname} {client.lastname}
                  </header>
                  <div className='Clients-modal-att'>
                    <span className='clientsDetails'>תעודת זהות:</span>
                    {client.id}
                    <span className='clientsDetails'>טלפון:</span>
                    {client.phone}
                    <span className='clientsDetails'>סוג מנוי:</span>
                    {client.Type}
                    <span className='clientsDetails'>תקופת מנוי:</span>
                    {client.Time}
                    <span className='clientsDetails'> אמצעי תשלום:</span>
                    {client.Payment}
                    <span className='clientsDetails'> סה"כ תשלום:</span>
                    {client.Total}
                    <span className='clientsDetails'> תאריך הצטרפות:</span>
                    {moment(client.date).format('YYYY/MM/DD')}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
ClientsModal.propTypes = {
  getclientslist: PropTypes.array,
  clientdata: PropTypes.string
};
export default ClientsModal;
