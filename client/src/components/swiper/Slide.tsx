import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import styles from './slide.module.css'

const Slide = () => {
  return (
    
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img className={styles.slide} src="https://i.ibb.co/HxZT3Bg/negroni.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slide} src="https://i.ibb.co/8K5fyfN/sazerac.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slide} src="https://i.ibb.co/30B2BMj/white-russian.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slide} src="https://i.ibb.co/hR2mNBy/aperol.jpg"></img>
        </SwiperSlide>
        ...
      </Swiper>
    
  );
};

export default Slide;
