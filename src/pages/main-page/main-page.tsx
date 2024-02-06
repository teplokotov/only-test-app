import React from 'react';
import './main-page.scss';

function MainPage() {
  return (
    <main className='main'>
      <section className='historic-dates'>
        <h1 className='historic-dates__heading'>Исторические даты</h1>
        <div className="historic-dates__range"></div>
        <div className="historic-dates__spinner">
          <div className='spinner__circle'></div>
        </div>
        <div className="historic-dates__navigation"></div>
        <div className="historic-dates__slider"></div>
      </section>
    </main>
  );
}

export default MainPage;
