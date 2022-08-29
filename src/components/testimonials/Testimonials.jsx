import React from "react";
import "./testimonials.css";

import TestimonialData from "./TestimonialData";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testiomonials = () => {
  const testimonialCards = TestimonialData.map(
    ({ avatar, name, review }, index) => {
      return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar1" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
      );
    }
  );

  return (
    <section className="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialCards}
      </Swiper>
    </section>
  );
};

export default testiomonials;
