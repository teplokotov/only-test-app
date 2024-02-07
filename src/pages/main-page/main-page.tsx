import React, { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { historicDates } from '../../constants/historic-dates';
import 'swiper/css';
import 'swiper/css/navigation';
import './main-page.scss';

function MainPage() {

  const numberOfEvents = historicDates.length;
  const angleBetweenDots = 360 / numberOfEvents;

  const sliderRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = React.useState<number>(angleBetweenDots);
  const [currentEvent, setCurrentEvent] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => sliderRef.current?.classList.add("slider_show"), 300);
  }, [currentEvent]);

  function getTotal(length: number, index: number): string {
    return `${String(index + 1).padStart(2,'0')}/${String(length).padStart(2,'0')}`;
  }

  function loadPrev():void {
    sliderRef.current?.classList.remove("slider_show");
    setTimeout(() => setCurrentEvent(currentEvent - 1), 300);
  }

  function loadNext():void {
    sliderRef.current?.classList.remove("slider_show");
    setTimeout(() => setCurrentEvent(currentEvent + 1), 300);
  }

  return (
    <main className='main'>
      <section className='historic-dates'>
        <h1 className='historic-dates__heading'>Исторические даты</h1>
        <div className="historic-dates__range range">
          <p className='range_start'>2015</p>
          <p className='range_end'>2022</p>
        </div>
        <div className="historic-dates__spinner spinner">
          <div className='spinner__main-circle' 
               style={{ "--count": numberOfEvents, "--angle": angle + "deg" } as React.CSSProperties}>
            {
              historicDates.map((item, index) => {
                const { title } = item;
                const idx = index + 1;
                return (
                  <div key={index} className={"spinner__shoulder " + (currentEvent === index ? 'spinner__shoulder_active' : '')} 
                       style={{ "--i": idx } as React.CSSProperties}
                       onClick={() => setCurrentEvent(index)}
                       >
                    <div className='spinner__circle-area'>
                      <p className='spinner__circle'>{idx}
                        <span className='spinner__title'>{title}</span>
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="historic-dates__navigation navigation">
          <p className='navigation__total'>{getTotal(numberOfEvents, currentEvent)}</p>
          <div className='navigation__buttons control-buttons'>
            <button 
              className='control-buttons__default control-buttons__prev'
              onClick={loadPrev}
              disabled={currentEvent === 0 ? true : false}
            >
            </button>
            <button
              className='control-buttons__default control-buttons__next'
              onClick={loadNext}
              disabled={currentEvent === numberOfEvents - 1 ? true : false}
            >
            </button>
          </div>
        </div>
        <div ref={sliderRef} className="historic-dates__slider slider">
          <button className='slider__btn slider__btn_prev'></button>
          {
            <Swiper
              modules={[Navigation]}
              spaceBetween={80}
              slidesPerView={4}
              navigation={{
                prevEl: '.slider__btn_prev',
                nextEl: '.slider__btn_next',
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {
                historicDates[currentEvent].events
                  .map((item, index) => {
                    const { date, description } = item;
                    return (
                      <SwiperSlide key={index} className='slider__slide'>
                        <p className='slider__year'>{date}</p>
                        <p className='slider__description'>{description}</p>
                      </SwiperSlide>
                    );
                  })
              }
            </Swiper>
          }
          <button className='slider__btn slider__btn_next'></button>  
        </div>
      </section>
    </main>
  );
}

export default MainPage;
