import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/effect-coverflow"
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";


export default function SWiper() {
  return (
    <div class="swipe">
        <Swiper>
          <SwiperSlide>
            <img src={img1}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3}/>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}