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
                    <div className='clientsDetails'>תעודת זהות:</div>
                    {client.id}
                    <div className='clientsDetails'>טלפון:</div>
                    {client.phone}
                    <div className='clientsDetails'>סוג מנוי:</div>
                    {client.Type}
                    <div className='clientsDetails'>תקופת מנוי:</div>
                    {client.Time}
                    <div className='clientsDetails'> אמצעי תשלום:</div>
                    {client.Payment}
                    <div className='clientsDetails'> סה"כ תשלום:</div>
                    {client.Total}
                    <div className='clientsDetails'> תאריך הצטרפות:</div>
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
