import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components imports
import Navbar from '../Navbar/Navbar';
import AppFooter from '../AppFooter';
// Css imports
import './Buildplan.css';
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
import { SetNotification } from '../../actions/NavAction';
import { SetAccount } from '../../actions/NavAction';
import { closeAll } from '../../actions/NavAction';
import { ShowMuscles } from '../../actions/BuildAction';
import { SetNav } from '../../actions/NavAction';

const BuildPlan = ({
  listBox,
  ListBoxSelected,
  NotificationsSelected,
  AccountSelected,
  getDays,
  closeAll,
  ShowMuscles,
  Muscles_State,
  SetNav
}) => {
  // ComponentWillMount
  useEffect(() => {
    closeAll();
    let days = JSON.parse(localStorage.getItem('days')) || '';
    SetDay(days);
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
    // FrontHand Exercises
    { id: 28, label: 'כפיפת מרפקים כנגד מוט', selected: false },
    { id: 29, label: 'כפיפת מרפקים בעמידה עם מוט', selected: false },
    { id: 30, label: 'פטישים', selected: false },
    { id: 31, label: 'מתח באחיזה הפוכה', selected: false },
    { id: 32, label: 'כפיפת מרפק על כיסא כומר', selected: false },
    { id: 33, label: 'כפיפת מרפק בפולי', selected: false },
    { id: 34, label: "כפיפות מרפקים בספסל פריצ'ר בישיבה", selected: false },
    { id: 35, label: ' כפיפות מרפקים כנגד כבל קרוס בישיבה', selected: false },
    { id: 36, label: 'כפיפת מרפקים עם משקולות יד', selected: false },
    // BackHand Exercises
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
  const FrontHand = [
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
  const BackHand = [
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
    { id: 3, label: 'יד קדמית', value: 'FrontHand', selected: false },
    { id: 4, label: 'יד אחורית', value: 'BackHand', selected: false },
    { id: 5, label: 'רגליים', value: 'Legs', selected: false },
    { id: 6, label: 'כתפיים', value: 'Shoulders', selected: false }
  ];
  // useState
  const [dayData, SetDay] = useState(null);
  const [MusclesData, SetMuscles] = useState(Muscles);
  const [ChestData] = useState(Chest);
  const [AbsData] = useState(Abs);
  const [BackData] = useState(Back);
  const [FrontHandData] = useState(FrontHand);
  const [BackHandData] = useState(BackHand);
  const [LegsData] = useState(Legs);
  const [ShouldersData] = useState(Shoulders);
  const [CounterData, SetCounter] = useState(0);
  const [ExercisesData, SetExercises] = useState(Exercises);
  const [MuscleName, SetMuscleName] = useState('חזה');
  const [ListState, SetList] = useState(false);
  // Functions
  const onChange = (id, muscleName) => {
    SetNav(true);
    ShowMuscles(true);
    SetMuscleName(muscleName);
    SetMuscles(
      MusclesData.map(muscle => {
        if (id === muscle.id && muscle.selected === false) {
          return { ...muscle, selected: !muscle.selected };
        } else {
          return { ...muscle, selected: false };
        }
      })
    );
  };
  // functions
  const saveExercises = id => {
    if (id > 0 && id <= 9) {
      SetExercises(
        ExercisesData.map(chest => {
          if (id === chest.id && chest.selected === false) {
            const Checked = { ...chest, selected: true };
            Additem();
            return Checked;
          }
          return chest;
        })
      );
    }
    if (id > 9 && id <= 18) {
      SetExercises(
        ExercisesData.map(abs => {
          if (id === abs.id && abs.selected === false) {
            const Checked = { ...abs, selected: true };
            Additem();
            return Checked;
          }
          return abs;
        })
      );
    }
    if (id > 18 && id <= 27) {
      SetExercises(
        ExercisesData.map(back => {
          if (id === back.id && back.selected === false) {
            const Checked = { ...back, selected: true };
            Additem();
            return Checked;
          }
          return back;
        })
      );
    }
    if (id > 27 && id <= 36) {
      SetExercises(
        ExercisesData.map(frontHand => {
          if (id === frontHand.id && frontHand.selected === false) {
            const Checked = { ...frontHand, selected: true };
            Additem();
            return Checked;
          }
          return frontHand;
        })
      );
    }
    if (id > 36 && id <= 46) {
      SetExercises(
        ExercisesData.map(backHand => {
          if (id === backHand.id && backHand.selected === false) {
            const Checked = { ...backHand, selected: true };
            Additem();
            return Checked;
          }
          return backHand;
        })
      );
    }
    if (id > 46 && id <= 54) {
      SetExercises(
        ExercisesData.map(leg => {
          if (id === leg.id && leg.selected === false) {
            const Checked = { ...leg, selected: true };
            Additem();
            return Checked;
          }
          return leg;
        })
      );
    }
    if (id > 54 && id <= 63) {
      SetExercises(
        ExercisesData.map(shoulder => {
          if (id === shoulder.id && shoulder.selected === false) {
            const Checked = { ...shoulder, selected: true };
            Additem();
            return Checked;
          }
          return shoulder;
        })
      );
    }
  };
  const Additem = () => {
    SetCounter(prevCount => prevCount + 1);
  };
  const DeleteItem = id => {
    SetExercises(
      ExercisesData.map(del => {
        if (id === del.id) {
          SetCounter(CounterData - 1);
          return { ...del, selected: false };
        }
        return del;
      })
    );
  };
  const ShowList = () => {
    listBox(ListBoxSelected);

    if (NotificationsSelected === true) {
      SetNotification(NotificationsSelected);
    }
    if (AccountSelected === true) {
      SetAccount(AccountSelected);
    }
  };
  const ListChecked = () => {
    SetList(!ListState);
  };
  return (
    <div className='BuildPlan'>
      <MediaQuery maxDeviceWidth={900}>
        <BuildPlanMobile
          dayData={dayData}
          onChange={onChange}
          MusclesData={MusclesData}
          Muscles_State={Muscles_State}
          ShowMuscles={ShowMuscles}
          ChestData={ChestData}
          saveExercises={saveExercises}
          BackData={BackData}
          FrontHandData={FrontHandData}
          BackHandData={BackHandData}
          LegsData={LegsData}
          ShouldersData={ShouldersData}
          AbsData={AbsData}
          MuscleName={MuscleName}
          CounterData={CounterData}
          SetList={SetList}
          ListState={ListState}
          ListChecked={ListChecked}
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
                  <div className='Quantity'>{CounterData}</div>
                  {ListBoxSelected ? (
                    <div className='ListBox'>
                      <div className='ListBox-Att'>
                        <div className='HeaderList'>
                          תרגילים שנבחרו
                          <div className='Header-Padding '></div>
                        </div>
                        <div className='ExercisesText-Box'>
                          {/* Code for adding the exercises to list */}
                          {ExercisesData.map(item => (
                            <div key={item.id}>
                              {item.selected ? (
                                <div className='ExercisesText-Att'>
                                  <div className='ExercisesText'>
                                    {item.label}
                                    <div
                                      className='DeleteItem'
                                      onClick={() => DeleteItem(item.id)}
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                        <div className='ListBox-Button-Display'>
                          <button className='Buttons-ListBox'>
                            שמור תוכנית
                          </button>
                          <button
                            onClick={() => listBox(ListBoxSelected)}
                            className='Buttons-ListBox'
                          >
                            סגור
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <form className='Form-Plan'>
                    <div className='Plan-Flex'>
                      {/* Code for show the muscles in the page */}
                      {MusclesData.map(muscles => (
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
                    {MusclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Chest' ? (
                          <div>
                            {() => SetMuscleName(muscle.label)}
                            <ShowChest
                              ChestData={ChestData}
                              saveExercises={saveExercises}
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {MusclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Abs' ? (
                          <ShowAbs
                            AbsData={AbsData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {MusclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Back' ? (
                          <ShowBack
                            BackData={BackData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {MusclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'FrontHand' ? (
                          <ShowFrontHand
                            FrontHandData={FrontHandData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {MusclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'BackHand' ? (
                          <ShowBackHand
                            BackHandData={BackHandData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {MusclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Legs' ? (
                          <ShowLegs
                            LegsData={LegsData}
                            saveExercises={saveExercises}
                          />
                        ) : null}
                      </div>
                    ))}
                    {MusclesData.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Shoulders' ? (
                          <ShowShoulders
                            ShouldersData={ShouldersData}
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
                      <button className='Icon-List' onClick={() => ShowList()}>
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
const ShowChest = props => (
  <div className='Display-Button'>
    {props.ChestData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => props.saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowAbs = props => (
  <div className='Display-Button'>
    {props.AbsData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => props.saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowBack = props => (
  <div className='Display-Button'>
    {props.BackData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => props.saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowFrontHand = props => (
  <div className='Display-Button'>
    {props.FrontHandData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => props.saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowBackHand = props => (
  <div className='Display-Button'>
    {props.BackHandData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => props.saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowLegs = props => (
  <div className='Display-Button'>
    {props.LegsData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => props.saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const ShowShoulders = props => (
  <div className='Display-Button'>
    {props.ShouldersData.map(item => (
      <div
        key={item.id}
        className='Plan-Button'
        onClick={() => props.saveExercises(item.id)}
      >
        {item.label}
      </div>
    ))}
  </div>
);
const BuildPlanMobile = ({
  dayData,
  MusclesData,
  onChange,
  Muscles_State,
  ShowMuscles,
  ChestData,
  saveExercises,
  AbsData,
  BackData,
  FrontHandData,
  BackHandData,
  LegsData,
  ShouldersData,
  MuscleName,
  CounterData,
  SetList,
  ListState,
  ListChecked
}) => (
  <div className='Mobile'>
    <main className='main'>
      <h2 id='Mobile-text'>
        בניית תוכנית אימונים
        <button className='Icon-List'>
          <div className='Quantity-Mobile'>{CounterData}</div>
          <FontAwesomeIcon
            onClick={() => ListChecked()}
            icon={faClipboardList}
          />
        </button>
      </h2>
      <div className='Build-Muscle'>
        <div className='Header-Muscles'>
          בחר שרירים {dayData}
          <FontAwesomeIcon
            onClick={() => ShowMuscles(Muscles_State)}
            icon={faAngleDown}
          />
        </div>

        <Collapse isOpen={Muscles_State}>
          {MusclesData.map(muscles => (
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
      <div className='Build-Exe-Header'> רשימת תרגילים {MuscleName}</div>
      {/* Code For Showing The Exercises */}
      {MusclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Chest' ? (
            <ShowChest ChestData={ChestData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {MusclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Abs' ? (
            <ShowAbs AbsData={AbsData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {MusclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Back' ? (
            <ShowBack BackData={BackData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {MusclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'FrontHand' ? (
            <ShowFrontHand
              FrontHandData={FrontHandData}
              saveExercises={saveExercises}
            />
          ) : null}
        </div>
      ))}
      {MusclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'BackHand' ? (
            <ShowBackHand
              BackHandData={BackHandData}
              saveExercises={saveExercises}
            />
          ) : null}
        </div>
      ))}
      {MusclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Legs' ? (
            <ShowLegs LegsData={LegsData} saveExercises={saveExercises} />
          ) : null}
        </div>
      ))}
      {MusclesData.map(muscle => (
        <div key={muscle.id}>
          {muscle.selected && muscle.value === 'Shoulders' ? (
            <ShowShoulders
              ShouldersData={ShouldersData}
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
  SetNotification: PropTypes.func,
  SetAccount: PropTypes.func,
  closeAll: PropTypes.func,
  ShowMuscles: PropTypes.func,
  SetNav: PropTypes.func
};
const mapStateToProps = state => ({
  getDays: state.ExePlanReducer.getDays,
  Muscles_State: state.BuildReducer.Muscles_State
});

export default connect(mapStateToProps, {
  SetNotification,
  SetAccount,
  closeAll,
  ShowMuscles,
  SetNav
})(BuildPlan);
