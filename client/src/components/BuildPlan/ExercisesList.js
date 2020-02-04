import React from 'react';
import PropTypes from 'prop-types';
// Components imports
import Alert from '../layout/Alert';
// Bootstrap imports
import { Modal, Button } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
import { closeAlerts } from '../../actions/alertAction';
const ExercisesList = props => {
  return (
    <div className='ExercisesList'>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            תרגילים שנבחרו
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id='modal-padding'>
          <div className='Modal-muscle-name'>{props.muscleName}</div>
          <Alert />
          {props.exercisesdata.map(item => (
            <div key={item.id}>
              {item.selected ? (
                <div className='ExercisesText-Att'>
                  <div className='ExercisesText'>
                    {item.label}
                    <div
                      className='DeleteItem'
                      onClick={() => props.deleteitem(item.id)}
                    >
                      +
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-success'>שלח תוכנית</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
ExercisesList.propTypes = {
  closeAlerts: PropTypes.func,
  exercisesData: PropTypes.array
};
export default connect(null, { closeAlerts })(ExercisesList);
