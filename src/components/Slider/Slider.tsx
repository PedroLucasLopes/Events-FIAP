import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = ({
  spaceBetween,
  slidePerView,
  clickable,
  draggable,
  onSwiper,
  onSlideChange,
  slider,
}: {
  spaceBetween?: number;
  slidePerView?: number;
  clickable?: boolean;
  draggable?: boolean;
  onSwiper?: (swiper: unknown) => void;
  onSlideChange?: () => void;
  slider: any[];
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween ? spaceBetween : 50}
      slidesPerView={slidePerView ? slidePerView : 3}
      pagination={{ clickable: clickable ? clickable : true }}
      scrollbar={{ draggable: draggable ? draggable : true }}
      onSwiper={(swiper) => onSwiper && onSwiper(swiper)}
      onSlideChange={() => onSlideChange && onSlideChange()}
    >
      {slider &&
        slider.map((slide, i) => {
          return <SwiperSlide key={i}>{slide}</SwiperSlide>;
        })}
    </Swiper>
  );
};

export default Slider;
