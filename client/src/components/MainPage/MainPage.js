import React from 'react';
import logo from '../../img/logo.png';
import '../../css/MainPages.css';
import { Carousel } from 'react-bootstrap';
import maxfit from '../../img/maxfit.png';
import NewClient from '../../img/NewClient.png';
import Clients from '../../img/Clients.png';
import Updates from '../../img/Updates.png';
import { Link } from 'react-router-dom';
import MainFooter from '../MainFooter';
// Mobile imports
import MobileFooter from '../Mobile/MobileFooter';
import MediaQuery from 'react-responsive';
const MainPage = () => {
  return (
    <div className='MainPage'>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileMain />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <header>
          <div className='MainPage-Header'>
            <div className='MainPage-logo'>
              <img src={logo} alt='Logo' />
            </div>
          </div>
        </header>
        <main className='main'>
          <div className='MainPage-container'>
            <div className='MainPage-content '>
              <div className='MainPage-title '>ברוכים הבאים ל-Maxfit</div>
              <div className='MainPage-text'>
                תוכנה לניהול חדר כושר שתאפשר לבעל חדר הכושר לבצע פעולות כמו:
                בניית תוכניות אימונים, לראות סטטיסטיקות על מתאמנים, להוסיף
                מתאמנים חדשים ועוד.
              </div>
              <div className='Carousel-content '>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className='d-block w-100 '
                      src={maxfit}
                      alt='Maxfit Dashboard'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={NewClient}
                      alt='New Client page'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={Updates}
                      alt='Third slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={Clients}
                      alt='Third slide'
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className='MainPage-text'>
                בנוסף מנהל חדר הכושר יוכל בעמוד הבקרה לראות מידע כמו: סטטיסטיקות
                מנויים, רשימת מתאמנים ועוד.
              </div>
              <div className='Button-content '>
                <div className='MainPage-text'>
                  נשמע מעניין?
                  <Link to='/registarApp'>
                    <button>הירשם עכשיו</button>
                  </Link>
                </div>
                <div className='MainPage-text'>
                  כבר רשום?
                  <Link to='/LoginApp'>
                    <button>התחבר</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <MainFooter />
      </MediaQuery>
    </div>
  );
};
const MobileMain = () => (
  <div className='Mobile'>
    <header>
      <div className='Mobile-Header'>
        <img src={logo} alt='Logo' id='Mobile-img' />
      </div>
    </header>
    <main className='main'>
      <div className='Mobile-container'>
        <div className='Mobile-content'>
          <div className='Mobile-Main-Title '>ברוכים הבאים ל-Maxfit</div>

          <div className='Mobile-Main-Text'>
            תוכנה לניהול חדר כושר שתאפשר לבעל חדר הכושר לבצע פעולות כמו: בניית
            תוכניות אימונים, לראות סטטיסטיקות על מתאמנים, להוסיף מתאמנים חדשים
            ועוד.
          </div>
          <div className='Mobile-Carousel-content '>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100 '
                  src={maxfit}
                  alt='Maxfit Dashboard'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={NewClient}
                  alt='New Client page'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={Updates}
                  alt='Third slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={Clients}
                  alt='Third slide'
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='Mobile-Main-Text'>
            בנוסף מנהל חדר הכושר יוכל בעמוד הבקרה לראות מידע כמו: סטטיסטיקות
            מנויים, רשימת מתאמנים ועוד.
          </div>
          <div className='Button-content '>
            <div className='Mobile-Main-Text'>
              נשמע מעניין?
              <Link to='/registarApp'>
                <button>הירשם עכשיו</button>
              </Link>
            </div>
            <div className='Mobile-Main-Text'>
              כבר רשום?
              <Link to='/LoginApp'>
                <button>התחבר</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <MobileFooter />
    </footer>
  </div>
);
export default MainPage;
