import React from 'react';
import './main-page.scss';

function MainPage() {
  return (
    <main className='main'>
      <section className='historic-dates'>
        <h1 className='historic-dates__heading'>Исторические даты</h1>
        <div className="historic-dates__range range">
          <p className='range_start'>2015</p>
          <p className='range_end'>2022</p>
        </div>
        <div className="historic-dates__spinner spinner">
          <div className='spinner__main-circle' style={{ "--count": 6, "--angle": "60deg" } as React.CSSProperties}>
            <div className='spinner__shoulder spinner__shoulder_active' style={{ "--i": 1 } as React.CSSProperties}>
              <div className='spinner__circle-area'>
                <p className='spinner__circle'>1
                  <span className='spinner__title'>Наука</span>
                </p>
              </div>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 2 } as React.CSSProperties}>
              <div className='spinner__circle-area'>
                <p className='spinner__circle'>2
                  <span className='spinner__title'>Литература</span>
                </p>
              </div>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 3 } as React.CSSProperties}>
              <div className='spinner__circle-area'>
                <p className='spinner__circle'>3
                  <span className='spinner__title'>Кино</span>
                </p>
              </div>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 4 } as React.CSSProperties}>
              <div className='spinner__circle-area'>
                <p className='spinner__circle'>4
                  <span className='spinner__title'>Театр</span>
                </p>
              </div>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 5 } as React.CSSProperties}>
              <div className='spinner__circle-area'>
                <p className='spinner__circle'>5
                  <span className='spinner__title'>Игры</span>
                </p>
              </div> 
            </div>
            <div className='spinner__shoulder' style={{ "--i": 6 } as React.CSSProperties}>
              <div className='spinner__circle-area'>
                <p className='spinner__circle'>6
                  <span className='spinner__title'>Космос</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="historic-dates__navigation navigation">
          <p className='navigation__total'>01/06</p>
          <div className='navigation__buttons control-buttons'>
            <button className='control-buttons__default control-buttons__prev'></button>
            <button className='control-buttons__default control-buttons__next'></button>
          </div>
        </div>
        <div className="historic-dates__slider"></div>
      </section>
    </main>
  );
}

export default MainPage;
