import React from "react";
import { useSwiper } from "swiper/react";
import { images } from "../constant";


/**
 * **SwiperNavButtons**
 * 
 * @Navigation buttons for the Swiper carousel.
 * 
 * **Features:**
 *   - "Previous" and "Next" buttons to navigate slides.
 *   - Uses `useSwiper()` to control Swiper instance.
 * 
 * **Key Dependencies:** `Swiper`, `images` (icons for navigation).
 */


const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute -top-2 sm:top-4 left-1 right-4 block sm:flex gap-2 z-10 w-full justify-between items-center">
      <h2 className="text-2xl font-bold">Popular Books</h2>
      <div className="flex gap-5 mt-1 sm:mr-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="border border-gray-500 text-black px-3 py-1 rounded-full hover:bg-green-600 hover:text-white hover:border-white cursor-pointer"
      >
        <img className="w-[30px] h-[20px]" src={images.leftIcon} alt="" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="border border-gray-500 text-black px-3 py-1 rounded-full hover:bg-green-600 hover:text-white hover:border-white cursor-pointer"
      >
        <img className="w-[30px] h-[20px]" src={images.rightIcon} alt="" />
      </button>
      </div>
    </div>
  );
};

export default SwiperNavButtons;
