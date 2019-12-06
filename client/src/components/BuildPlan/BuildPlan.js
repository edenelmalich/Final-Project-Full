import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
import ExercisesList from './ExercisesList';
import Alert from '../layout/Alert';
// Css imports
import '../../css/buildPlan.css';
// import Link from react-router
import { Link } from 'react-router-dom';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardList,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
// Bootstrap imports
import { Toast } from 'react-bootstrap';
// ReactStrap imports
import { Collapse } from 'reactstrap';
// Mobile imports
import '../../css/Mobile.css';
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import {
  setNotificationToggle,
  setAccountToggle,
  closeAll,
  setNavMobileToggle
} from '../../actions/navsAction';
import { showMuscles } from '../../actions/buildActions';
import { setAlert } from '../../actions/alertAction';
import { closeAlerts } from '../../actions/alertAction';

const BuildPlan = ({
  closeAll,
  showMuscles,
  Muscles_State,
  setNavMobileToggle,
  setAlert
}) => {
  // ComponentWillMount
  useEffect(() => {
    closeAll();
    closeAlerts();
    let days = JSON.parse(localStorage.getItem('days')) || '';
    setDay(days);
  }, []);

  // Data
  const Exercises = [
    // Chest Exercises
    { id: 1, label: 'לחיצת חזה כנגד מוט', selected: false },
    { id: 2, label: 'לחיצה בשיפוע עליון כנגד דאמבלים', selected: false },
    { id: 3, label: 'פרפר מכונה', selected: false },
    { id: 4, label: 'לחיצת חזה בשיפוע שלילי', selected: false },
    { id: 5, label: 'לחיצת חזה בשיפוע חיובי', selected: false },
    { id: 6, label: 'מקבילים', selected: false },
    { id: 7, label: 'בשכיבה לחיצת חזה כנגד מוט', selected: false },
    { id: 8, label: 'פרפר בשכיבה עם משקולות', selected: false },
    { id: 9, label: 'שכיבות שמיכה', selected: false },
    // Abs Exercises
    { id: 10, label: 'כפיפות בטן', selected: false },
    { id: 11, label: 'פלאנק', selected: false },
    { id: 12, label: 'פלאנק צידי', selected: false },
    { id: 13, label: 'הרמות רגליים', selected: false },
    { id: 14, label: 'אופניים', selected: false },
    { id: 15, label: 'פינגווינים', selected: false },
    { id: 16, label: 'כפיפות בטן אלכסוניות', selected: false },
    { id: 17, label: 'כפיפת גב הצידה', selected: false },
    { id: 18, label: 'הרמת רגליים בתלייה', selected: false },
    // Back Exercises
    { id: 19, label: 'מתח', selected: false },
    { id: 20, label: 'משיכה מפולי עליון', selected: false },
    { id: 21, label: 'מסור / חתירה יד יד', selected: false },
    { id: 22, label: 'פולאובר', selected: false },
    { id: 23, label: 'דדליפט עם מוט', selected: false },
    { id: 24, label: 'פולאובר בשכיבה כנגד משקולת יד', selected: false },
    { id: 25, label: 'חתירה בהטיית גב כנגד מוט', selected: false },
    { id: 26, label: 'משיכת פולי עליון אחיזה צרה', selected: false },
    { id: 27, label: ' מתח רחב', selected: false },
    // frontHand Exercises
    { id: 28, label: 'כפיפת מרפקים כנגד מוט', selected: false },
    { id: 29, label: 'כפיפת מרפקים בעמידה עם מוט', selected: false },
    { id: 30, label: 'פטישים', selected: false },
    { id: 31, label: 'מתח באחיזה הפוכה', selected: false },
    { id: 32, label: 'כפיפת מרפק על כיסא כומר', selected: false },
    { id: 33, label: 'כפיפת מרפק בפולי', selected: false },
    { id: 34, label: "כפיפות מרפקים בספסל פריצ'ר בישיבה", selected: false },
    { id: 35, label: ' כפיפות מרפקים כנגד כבל קרוס בישיבה', selected: false },
    { id: 36, label: 'כפיפת מרפקים עם משקולות יד', selected: false },
    // backHand Exercises
    { id: 37, label: 'לחיצת חזה בשכיבה באחיזה צרה עם מוט', selected: false },
    { id: 38, label: 'פשיטת מרפקים בשכיבה עם מוט', selected: false },
    { id: 39, label: 'פשיטת מרפק בפולי', selected: false },
    { id: 40, label: 'מקבילים כנגד ספסל', selected: false },
    { id: 41, label: 'מקבילים כגד משקל גוף', selected: false },
    { id: 42, label: 'לחיצה צרפתית', selected: false },
    { id: 43, label: 'לחיצת חזה אחיזת מעויין', selected: false },
    { id: 44, label: 'שכיבות שמיכה יהלום', selected: false },
    { id: 45, label: 'מקבילים עם משקל', selected: false },
    // Legs Exercises
    { id: 46, label: 'הרמת עקבים בעמידה כנגד מכונת סמית', selected: false },
    { id: 47, label: 'כפיפת ברכיים בשכיבה במכונה', selected: false },
    { id: 48, label: 'לחיצת רגליים במכונה', selected: false },
    { id: 49, label: 'סקוואט כנגד מוט', selected: false },
    { id: 50, label: 'סקוואט ברגל אחת עם משקולת יד', selected: false },
    { id: 51, label: 'סווינג', selected: false },
    { id: 52, label: 'מכרעיים בהליכה עם משקולות', selected: false },
    { id: 53, label: 'מכרעיים לאחור כנגד מוט', selected: false },
    { id: 54, label: 'לחיצת כפות רגליים רחבות וגבוהות', selected: false },
    // Shoulders Exercises
    { id: 55, label: 'הרחקה בעמידה בהצלבה עם כבלים', selected: false },
    { id: 56, label: 'לחיצת כתפיים בישיבה עם משקולות', selected: false },
    { id: 57, label: 'הרחקת כתפיים בעמידה עם משקולות', selected: false },
    { id: 58, label: 'חתירה אופקית עם חבל כנגד פולי עליון', selected: false },
    { id: 59, label: 'חתירה ישרה לסנטר עם מוט', selected: false },
    { id: 60, label: 'כפיפת כתף בעמידה כנגד פלטה', selected: false },
    { id: 61, label: 'כפיפת כתף בעמידה עם חבל כנגד פולי', selected: false },
    { id: 62, label: 'לחיצת ארנולד', selected: false },
    { id: 63, label: 'לחיצת בראדפורד בעמידה', selected: false }
  ];
  const Chest = [
    { id: 1, label: 'לחיצת חזה כנגד מוט', selected: false },
    { id: 2, label: 'לחיצה בשיפוע עליון כנגד דאמבלים', selected: false },
    { id: 3, label: 'פרפר מכונה', selected: false },
    { id: 4, label: 'לחיצת חזה בשיפוע שלילי', selected: false },
    { id: 5, label: 'לחיצת חזה בשיפוע חיובי', selected: false },
    { id: 6, label: 'מקבילים', selected: false },
    { id: 7, label: 'בשכיבה לחיצת חזה כנגד מוט', selected: false },
    { id: 8, label: 'פרפר בשכיבה עם משקולות', selected: false },
    { id: 9, label: 'שכיבות שמיכה', selected: false }
  ];
  const Abs = [
    { id: 10, label: 'כפיפות בטן', selected: false },
    { id: 11, label: 'פלאנק', selected: false },
    { id: 12, label: 'פלאנק צידי', selected: false },
    { id: 13, label: 'הרמות רגליים', selected: false },
    { id: 14, label: 'אופניים', selected: false },
    { id: 15, label: 'פינגווינים', selected: false },
    { id: 16, label: 'כפיפות בטן אלכסוניות', selected: false },
    { id: 17, label: 'כפיפת גב הצידה', selected: false },
    { id: 18, label: 'הרמת רגליים בתלייה', selected: false }
  ];
  const Back = [
    { id: 19, label: 'מתח', selected: false },
    { id: 20, label: 'משיכה מפולי עליון', selected: false },
    { id: 21, label: 'מסור / חתירה יד יד', selected: false },
    { id: 22, label: 'פולאובר', selected: false },
    { id: 23, label: 'דדליפט עם מוט', selected: false },
    { id: 24, label: 'פולאובר בשכיבה כנגד משקולת יד', selected: false },
    { id: 25, label: 'חתירה בהטיית גב כנגד מוט', selected: false },
    { id: 26, label: 'משיכת פולי עליון אחיזה צרה', selected: false },
    { id: 27, label: ' מתח רחב', selected: false }
  ];
  const frontHand = [
    { id: 28, label: 'כפיפת מרפקים כנגד מוט', selected: false },
    { id: 29, label: 'כפיפת מרפקים בעמידה עם מוט', selected: false },
    { id: 30, label: 'פטישים', selected: false },
    { id: 31, label: 'מתח באחיזה הפוכה', selected: false },
    { id: 32, label: 'כפיפת מרפק על כיסא כומר', selected: false },
    { id: 33, label: 'כפיפת מרפק בפולי', selected: false },
    { id: 34, label: "כפיפות מרפקים בספסל פריצ'ר בישיבה", selected: false },
    { id: 35, label: ' כפיפות מרפקים כנגד כבל קרוס בישיבה', selected: false },
    { id: 36, label: 'כפיפת מרפקים עם משקולות יד', selected: false }
  ];
  const backHand = [
    { id: 37, label: 'לחיצת חזה בשכיבה באחיזה צרה עם מוט', selected: false },
    { id: 38, label: 'פשיטת מרפקים בשכיבה עם מוט', selected: false },
    { id: 39, label: 'פשיטת מרפק בפולי', selected: false },
    { id: 40, label: 'מקבילים כנגד ספסל', selected: false },
    { id: 41, label: 'מקבילים כגד משקל גוף', selected: false },
    { id: 42, label: 'לחיצה צרפתית', selected: false },
    { id: 43, label: 'לחיצת חזה אחיזת מעויין', selected: false },
    { id: 44, label: 'שכיבות שמיכה יהלום', selected: false },
    { id: 45, label: 'מקבילים עם משקל', selected: false }
  ];
  const Legs = [
    { id: 46, label: 'הרמת עקבים בעמידה כנגד מכונת סמית', selected: false },
    { id: 47, label: 'כפיפת ברכיים בשכיבה במכונה', selected: false },
    { id: 48, label: 'לחיצת רגליים במכונה', selected: false },
    { id: 49, label: 'סקוואט כנגד מוט', selected: false },
    { id: 50, label: 'סקוואט ברגל אחת עם משקולת יד', selected: false },
    { id: 51, label: 'סווינג', selected: false },
    { id: 52, label: 'מכרעיים בהליכה עם משקולות', selected: false },
    { id: 53, label: 'מכרעיים לאחור כנגד מוט', selected: false },
    { id: 54, label: 'לחיצת כפות רגליים רחבות וגבוהות', selected: false }
  ];
  const Shoulders = [
    { id: 55, label: 'הרחקה בעמידה בהצלבה עם כבלים', selected: false },
    { id: 56, label: 'לחיצת כתפיים בישיבה עם משקולות', selected: false },
    { id: 57, label: 'הרחקת כתפיים בעמידה עם משקולות', selected: false },
    { id: 58, label: 'חתירה אופקית עם חבל כנגד פולי עליון', selected: false },
    { id: 59, label: 'חתירה ישרה לסנטר עם מוט', selected: false },
    { id: 60, label: 'כפיפת כתף בעמידה כנגד פלטה', selected: false },
    { id: 61, label: 'כפיפת כתף בעמידה עם חבל כנגד פולי', selected: false },
    { id: 62, label: 'לחיצת ארנולד', selected: false },
    { id: 63, label: 'לחיצת בראדפורד בעמידה', selected: false }
  ];
  const Muscles = [
    { id: 0, label: 'חזה', value: 'Chest', selected: true },
    { id: 1, label: 'בטן', value: 'Abs', selected: false },
    { id: 2, label: 'גב', value: 'Back', selected: false },
    { id: 3, label: 'יד קדמית', value: 'frontHand', selected: false },
    { id: 4, label: 'יד אחורית', value: 'backHand', selected: false },
    { id: 5, label: 'רגליים', value: 'Legs', selected: false },
    { id: 6, label: 'כתפיים', value: 'Shoulders', selected: false }
  ];
  // useState
  const [dayData, setDay] = useState(null);
  const [musclesData, setMuscles] = useState(Muscles);
  const [chestData] = useState(Chest);
  const [absData] = useState(Abs);
  const [backData] = useState(Back);
  const [frontHandData] = useState(frontHand);
  const [backHandData] = useState(backHand);
  const [legsData] = useState(Legs);
  const [shouldersData] = useState(Shoulders);
  const [counterData, setCounter] = useState(0);
  const [exercisesData, setExercises] = useState(Exercises);
  const [muscleName, setMuscleName] = useState('חזה');
  const [listState, setList] = useState(false);
  // Functions
  const onChange = (id, muscleTitle) => {
    setNavMobileToggle(true);
    showMuscles(true);
    setMuscleName(muscleTitle);
    setMuscles(
      musclesData.map(muscle => {
        if (id === muscle.id && muscle.selected === false) {
          return { ...muscle, selected: !muscle.selected };
        } else {
          return { ...muscle, selected: false };
        }
      })
    );
  };
  // functions
  const saveExercises = (id, selected) => {
    setExercises(
      exercisesData.map(exercise => {
        if (id === exercise.id && exercise.selected === false) {
          const Checked = { ...exercise, selected: true };
          Additem();
          return Checked;
        }
        return exercise;
      })
    );
  };

  const Additem = () => {
    setAlert('התרגיל נוסף בהצלחה', 'success');
    setCounter(prevCount => prevCount + 1);
  };
  const DeleteItem = id => {
    setExercises(
      exercisesData.map(del => {
        if (id === del.id) {
          setAlert('התרגיל הוסר בהצלחה', 'danger');
          setCounter(counterData - 1);
          return { ...del, selected: false };
        }
        return del;
      })
    );
  };

  return (
    <div className='BuildPlan'>
      <MediaQuery maxDeviceWidth={900}>
        <BuildPlanMobile
          dayData={dayData}
          onChange={onChange}
          musclesData={musclesData}
          Muscles_State={Muscles_State}
          showMuscles={showMuscles}
          chestData={chestData}
          saveExercises={saveExercises}
          backData={backData}
          frontHandData={frontHandData}
          backHandData={backHandData}
          legsData={legsData}
          shouldersData={shouldersData}
          absData={absData}
          muscleName={muscleName}
          counterData={counterData}
          setList={setList}
          listState={listState}
          exercisesData={exercisesData}
          DeleteItem={DeleteItem}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <Navbar />
        {/* The Attributes of the BuildPlan Page With the Title */}
        <div className='Page-Container'>
          <div className='Pages-Content'>
            <div className='Att-PagesContent'>
              <div className='PagesContainer'>
                <h2>בניית תוכנית אימונים</h2>
                <div className='Plan-Padding'></div>
                <div className='ExeMain'>
                  <div className='PlanHeader'>בחר שרירים {dayData}</div>
                  <div className='Main-Padding'></div>
                  <div className='Main-Border'></div>
                  <form className='Form-Plan'>
                    <div className='Plan-Flex'>
                      {/* Code for show the muscles in the page */}
                      {musclesData.map(muscles => (
                        <div key={muscles.id}>
                          <Toast>
                            <strong className='mr-auto'>
                              {muscles.label}
                              <input
                                type='checkbox'
                                onChange={() => onChange(muscles.id)}
                                checked={muscles.selected}
                              />
                            </strong>
                          </Toast>
                        </div>
                      ))}
                    </div>
                    <div className='Main-Padding'></div>
                    <div className='Main-Border'></div>
                    <div className='Build-Exe-Header'>רשימת תרגילים</div>
                    <div className='Plan-Padding'></div>
                    {/* Code For Showing The Exercises */}
                    {musclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Chest' ? (
                          <div>
                            {() => setMuscleName(muscle.label)}
                            <ShowChest
                              chestData={chestData}
                              saveExercises={saveExercises}
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {musclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Abs' ? (
                          <ShowAbs
                            absData={absData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {musclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Back' ? (
                          <ShowBack
                            backData={backData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {musclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'frontHand' ? (
                          <ShowFrontHand
                            frontHandData={frontHandData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {musclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'backHand' ? (
                          <ShowBackHand
                            backHandData={backHandData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {musclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Legs' ? (
                          <ShowLegs
                            legsData={legsData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {musclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Shoulders' ? (
                          <ShowShoulders
                            shouldersData={shouldersData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    <div className='FooterAtt'>
                      <Link to='/exeplan' className='BackPage'>
                        לדף הקודם
                      </Link>
                      {/* Code to open and close the list */}
                      <button className='Icon-List'>
                        <div className='Quantity-Exercises'>{counterData}</div>
                        <FontAwesomeIcon icon={faClipboardList} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <AppFooter />
        </div>
      </MediaQuery>
    </div>
  );
};
// Show-Muscles
const ShowChest = ({ chestData, saveExercises }) => (
  <div className='Display-Button'>
    {chestData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowAbs = ({ absData, saveExercises }) => (
  <div className='Display-Button'>
    {absData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowBack = ({ backData, saveExercises }) => (
  <div className='Display-Button'>
    {backData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowFrontHand = ({ saveExercises, frontHandData }) => (
  <div className='Display-Button'>
    {frontHandData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowBackHand = ({ saveExercises, backHandData }) => (
  <div className='Display-Button'>
    {backHandData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowLegs = ({ legsData, saveExercises }) => (
  <div className='Display-Button'>
    {legsData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowShoulders = ({ shouldersData, saveExercises }) => (
  <div className='Display-Button'>
    {shouldersData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const BuildPlanMobile = ({
  dayData,
  musclesData,
  onChange,
  Muscles_State,
  showMuscles,
  chestData,
  saveExercises,
  absData,
  backData,
  frontHandData,
  backHandData,
  legsData,
  shouldersData,
  muscleName,
  counterData,
  setList,
  listState,
  exercisesData,
  DeleteItem
}) => (
  <div className='Mobile'>
    <main className='main'>
      <Alert />
      <h2 id='Mobile-text'>
        בניית תוכנית אימונים
        <button className='Icon-List'>
          <div className='Quantity-Mobile'>{counterData}</div>
          <FontAwesomeIcon
            onClick={() => setList(!listState)}
            icon={faClipboardList}
          />
        </button>
      </h2>
      <ExercisesList
        show={listState}
        onHide={() => setList(false)}
        exercisesData={exercisesData}
        deleteItem={DeleteItem}
        muscleName={muscleName}
      />
      <div className='Build-Muscle'>
        <div className='Header-Muscles'>
          בחר שרירים {dayData}
          <FontAwesomeIcon
            onClick={() => showMuscles(Muscles_State)}
            icon={faAngleDown}
          />
        </div>
        <div className='Main-Padding'></div>

        <Collapse isOpen={Muscles_State}>
          {musclesData.map(muscles => (
            <div key={muscles.id}>
              <Toast>
                <strong className='mr-auto'>
                  {muscles.label}
                  <input
                    type='checkbox'
                    onChange={() => onChange(muscles.id, muscles.label)}
                    checked={muscles.selected}
                  />
                </strong>
              </Toast>
            </div>
          ))}
        </Collapse>
        <div className='Main-Border'></div>
      </div>
      <div className='Build-Exe-Header'> רשימת תרגילים {muscleName}</div>
      {/* Code For Showing The Exercises */}
      {musclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Chest' ? (
            <ShowChest chestData={chestData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {musclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Abs' ? (
            <ShowAbs absData={absData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {musclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Back' ? (
            <ShowBack backData={backData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {musclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'frontHand' ? (
            <ShowFrontHand
              frontHandData={frontHandData}
              saveExercises={saveExercises}
            />
          ) : null}
        </div>
      ))}
      {musclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'backHand' ? (
            <ShowBackHand
              backHandData={backHandData}
              saveExercises={saveExercises}
            />
          ) : null}
        </div>
      ))}
      {musclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Legs' ? (
            <ShowLegs legsData={legsData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {musclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Shoulders' ? (
            <ShowShoulders
              shouldersData={shouldersData}
              saveExercises={saveExercises}
            />
          ) : null}
        </div>
      ))}
      <Link to='/exeplan' className='BackPage'>
        לדף הקודם
      </Link>
    </main>
    <MobileFooter />
  </div>
);
BuildPlan.propTypes = {
  getDays: PropTypes.string,
  setNotificationToggle: PropTypes.func,
  setAccountToggle: PropTypes.func,
  closeAll: PropTypes.func,
  showMuscles: PropTypes.func,
  setNavMobileToggle: PropTypes.func,
  setAlert: PropTypes.func,
  closeAlerts: PropTypes.func
};
const mapStateToProps = state => ({
  getDays: state.exePlanReducer.getDays,
  Muscles_State: state.BuildReducer.Muscles_State
});

export default connect(mapStateToProps, {
  setNotificationToggle,
  setAccountToggle,
  closeAll,
  showMuscles,
  setNavMobileToggle,
  setAlert,
  closeAlerts
})(BuildPlan);
