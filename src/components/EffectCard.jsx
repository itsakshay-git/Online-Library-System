import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from "../constant";
import { EffectCards, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import '../components/effectcard.css';


/**
 * EffectCard Component
 * 
 * @Displays a welcome message and a Swiper carousel of book covers 
 * with card effects and autoplay.
 * 
 * Dependencies: React, Swiper (EffectCards, Autoplay), external CSS.
 */

const EffectCard = () => {
  return (
    <div className='block sm:flex justify-center p-10 m-8 bg-[#EBEBEB] rounded-xl items-center'>
        <div className='flex flex-col justify-center gap-3 w-full sm:w-[60%] items-center sm:mb-[10px]'>
            <div className='w-[90%] flex flex-col gap-10 sm:gap-20'>                
            <h1 className='text-5xl sm:text-6xl md:text-5xl lg:text-7xl'>Welcome <span className='font-greatvibes text-green-600 p-4'>to the</span> Online <br />
            Library System!</h1>
            <p className='w-full sm:w-[550px] md:w-[300px] lg:w-[550px] text-xs sm:text-sm md:text-[16px]'>Discover a world of knowledge with our vast collection of books. 
            Whether you love Fiction, Non-Fiction, Sci-Fi, or more, we have something for everyone!</p>
            </div>
        </div>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="effect-card-swiper mt-[20px] md:mt-0"
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        breakpoints={{
            320: { width: 200, height: 300 }, 
            640: { width: 200, height: 320 },
            1024: { width: 200, height: 340 },
          }}
      >
        <SwiperSlide><img className='object-cover' src={images.the1984} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.dune} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.thegreatgatsbybird} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.thehobbit} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.tokillamockingbird} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.bravenewworld} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.harrypotter} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.davinci} alt="book" /></SwiperSlide>
        <SwiperSlide><img className='object-cover' src={images.alchemist} alt="book" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default EffectCard