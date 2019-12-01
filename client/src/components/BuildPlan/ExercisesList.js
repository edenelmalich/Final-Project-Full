import React from 'react';
import PropTypes from 'prop-types';
// Components imports
import Alert from '../layout/Alert';
// Bootstrap imports
import { Modal } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
import { closeAlerts } from '../../actions/alertAction';
const ExercisesList = props => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      {() => closeAlerts()}
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          תרגילים שנבחרו
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div className='Modal-muscle-name'>{props.MuscleName}</div> */}
        <Alert />
        {props.exercisesData.map(item => (
          <div key={item.id}>
            {item.selected ? (
              <div className='ExercisesText-Att'>
                <div className='ExercisesText'>
                  {item.label}
                  <div
                    className='DeleteItem'
                    onClick={() => props.deleteItem(item.id)}
                  >
                    +
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
ExercisesList.propTypes = {
  closeAlerts: PropTypes.func
};
export default connect(null, { closeAlerts })(ExercisesList);
