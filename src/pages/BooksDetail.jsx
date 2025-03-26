import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useParams } from "react-router-dom";


/**
 * **BooksDetail Component**
 * 
 * @Purpose
 * - Displays detailed information about a selected book.
 * - Fetches book data from the Redux store and filters based on the book ID from the URL.
 * - Allows users to navigate back to the book browsing page.
 * 
 * @Features
 * - **Redux Integration:** Uses `useSelector` to fetch books from the global store.
 * - **Dynamic Routing:** Extracts `id` from `useParams` to find the corresponding book.
 * 
 * **Key Dependencies:** `react-redux`, `react-router-dom`
 */


const BooksDetail = () => {
  const books = useSelector((state) => state.books.books);
  const { id } = useParams();

  const filtered = books.filter((book) => book.id == id);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {filtered.map((book) => (
        <div
          key={book.id}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 items-center p-6"
        >
          {/* Book Cover */}
          <div className="flex flex-col justify-center items-center gap-4 col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-1">
            <div className="border-0 p-4 rounded-lg shadow-md flex flex-col items-center bg-[#F6F6F6] w-60 sm:w-72">
              <img
                src={book.image}
                alt={book.title}
                className="w-48 sm:w-64 h-auto rounded-lg"
              />
            </div>
            <div className="flex gap-2 sm:gap-4">
              <button className="border border-green-500 rounded-full text-green-500 px-3 py-1 text-xs sm:text-sm md:text-[10px] cursor-not-allowed">
                Pdf preview
              </button>
              <button className="border border-green-500 rounded-full text-green-500 px-3 py-1 text-xs sm:text-sm md:text-[10px] cursor-not-allowed">
                Audio preview
              </button>
            </div>
          </div>

          {/* Book Details */}
          <div className="col-span-1 sm:col-span-1 md:col-span-3 flex flex-col gap-4">
            <div>
              <Link to={`/books/${book.category}`}>
                <button className="px-4 py-2 border border-gray-500 hover:bg-green-500 hover:text-white hover:border-white rounded-full">Back to Browse</button>
              </Link>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">{book.title}</h1>
            <p className="text-gray-600 text-sm sm:text-lg mt-1">By {book.author}</p>

            {/* Star Ratings */}
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-500 text-lg sm:text-xl ${
                    i < book.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base">{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksDetail;
