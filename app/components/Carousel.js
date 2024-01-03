'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import userImg from "../../public/images/user-img.jpg"
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
    author: 'John Doe',
  },
  {
    id: 2,
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. um dolor sit amet, consectetur adipiscing um dolor sit amet, consectetur adipiscing',
    author: 'Jane Doe',
  },
  {
    id: 3,
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. um dolor sit amet, consectetur adipiscing',
    author: 'Jane Doe',
  },
  {
    id: 4,
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. um dolor sit amet, consectetur adipiscing um dolor sit amet, consectetur adipiscing',
    author: 'Jane Doe',
  },
];

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay
      navigation
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="review-card flex flex-col items-center lg:px-[160px] py-20 text-center">
            <p className="review-text text-[24px] lg:text-[30px] font-semibold leading-[1.4] font-serif">{review.text}</p>
            <div className='flex items-center gap-x-4 mt-8'>
              <Image src={userImg} alt="Reviewer Image" className='rounded-full w-9 h-9 object-cover' />
              <div className='flex flex-col text-[13px]'>
                <span className='font-medium'>Name of the reviewer</span>
                <span>Designation of the reviewer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
