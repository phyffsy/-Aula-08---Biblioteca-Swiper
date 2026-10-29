"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { slideData } from "../data/slideData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="carousel-swiper overflow-hidden rounded-2xl shadow-2xl"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <article className="relative h-[420px] sm:h-[500px]">
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-10">
                <h2 className="mb-3 text-2xl font-bold sm:text-4xl">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-sm text-white/90 sm:text-base">
                  {slide.description}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
