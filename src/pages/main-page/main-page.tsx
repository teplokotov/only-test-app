import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { historicDates } from '../../constants/historic-dates';
import 'swiper/css';
import 'swiper/css/navigation';
import './main-page.scss';

function MainPage() {

  const numberOfEvents = historicDates.length;
  const angleBetweenDots = 360 / numberOfEvents;

  const [angle, setAngle] = React.useState<number>(angleBetweenDots);
  const [currentEvent, setCurrentEvent] = React.useState<number>(0);

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
                  <div className={"spinner__shoulder " + (currentEvent === index ? 'spinner__shoulder_active' : '')} 
                       style={{ "--i": idx } as React.CSSProperties}>
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
          <p className='navigation__total'>01/06</p>
          <div className='navigation__buttons control-buttons'>
            <button className='control-buttons__default control-buttons__prev'></button>
            <button className='control-buttons__default control-buttons__next'></button>
          </div>
        </div>
        <div className="historic-dates__slider slider">
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
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide className='slider__slide'>
                <p className='slider__year'>2015</p>
                <p className='slider__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
              </SwiperSlide>
              <SwiperSlide className='slider__slide'>
                <p className='slider__year'>2016</p>
                <p className='slider__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
              </SwiperSlide>
              <SwiperSlide className='slider__slide'>
                <p className='slider__year'>2017</p>
                <p className='slider__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
              </SwiperSlide>
              <SwiperSlide className='slider__slide'>
                <p className='slider__year'>2018</p>
                <p className='slider__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
              </SwiperSlide>
              <SwiperSlide className='slider__slide'>
                <p className='slider__year'>2019</p>
                <p className='slider__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
              </SwiperSlide>
              <SwiperSlide className='slider__slide'>
                <p className='slider__year'>2020</p>
                <p className='slider__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
              </SwiperSlide>
            </Swiper>
          }
          <button className='slider__btn slider__btn_next'></button>  
        </div>
      </section>
    </main>
  );
}

export default MainPage;
