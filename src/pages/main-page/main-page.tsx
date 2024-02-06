import React from 'react';
import './main-page.scss';

function MainPage() {
  return (
    <main className='main'>
      <section className='historic-dates'>
        <h1 className='historic-dates__heading'>Исторические даты</h1>
        <div className="historic-dates__range"></div>
        <div className="historic-dates__spinner">
          <div className='spinner__main-circle' style={{ "--count": 6, "--angle": "0deg" } as React.CSSProperties}>
            <div className='spinner__shoulder' style={{ "--i": 1 } as React.CSSProperties}>
              <p className='spinner__circle'>1</p>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 2 } as React.CSSProperties}>
              <p className='spinner__circle'>2</p>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 3 } as React.CSSProperties}>
              <p className='spinner__circle'>3</p>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 4 } as React.CSSProperties}>
              <p className='spinner__circle'>4</p>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 5 } as React.CSSProperties}>
              <p className='spinner__circle'>5</p>
            </div>
            <div className='spinner__shoulder' style={{ "--i": 6 } as React.CSSProperties}>
              <p className='spinner__circle'>6</p>
            </div>
          </div>
        </div>
        <div className="historic-dates__navigation"></div>
        <div className="historic-dates__slider"></div>
      </section>
    </main>
  );
}

export default MainPage;
