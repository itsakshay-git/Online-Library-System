import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import recommendedBooks from "../utils/recommended";
import SwiperNavButtons from "./SwiperNavButtons";
import { Link } from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


/**
 * **SwiperComponent**
 * 
 * @carousel component showcasing recommended books.
 * 
 * 🔹 **Features:**
 *   - Uses `Swiper` for smooth sliding.
 * 
 * 🚀 **Key Dependencies:** `Swiper`, `react-router`, `recommendedBooks` data.
 */

const SwiperComponent = () => {
  return (
    <div className="p-8 w-full">     
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.5 },
        }}
        autoHeight={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="pb-12 mt-12"
        style={{ height: "700px" }}
      >
        <SwiperNavButtons />
        {recommendedBooks.map((book) => (
          <SwiperSlide key={book.id} className="flex flex-col items-center mt-20" style={{ height: "600px" }}>
            <div className="border-0 p-4 rounded-lg shadow-md flex flex-col items-center bg-[#F6F6F6] w-72">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-96 object-fill mb-2 rounded"
              />
              <div className="w-full">
                <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.category}</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  {book.author}
                </p>
                <p className="text-yellow-500">⭐ {book.rating}</p>   
              </div>

              <div className="text-center w-full">
                <Link to={`/book/${book.id}`}>
                <button className="mt-3 px-4 py-2 text-black text-center hover:bg-green-600 hover:border-white hover:text-white w-full border border-gray-500 rounded-full cursor-pointer">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
