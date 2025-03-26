import React, { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";


/**
 * **Recommended Component**
 * 
 * @Displays book recommendations with category filtering.
 * - **Features:**
 *   - Filter books by category.
 *   - "View More" toggle for additional books.
 *   - Uses Redux to fetch book data.
 * 
 * **Key Dependencies:** `useState`, `useSelector`, `react-router`
 */

const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy", "Biography"];

const Recommended = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const books = useSelector((state) => state.books.books);

  // Filter books based on category
  const filteredBooks = books.filter(
    (book) => selectedCategory === "All" || book.category === selectedCategory
  );

  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl mb-8">Categories</h1>

      <div className="flex justify-center items-center mb-15">

        {/* Category Buttons */}
        <div className="flex gap-5 sm:gap-10 my-4 flex-wrap items-center justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 border border-gray-500 hover:bg-green-500 hover:text-white hover:border-white rounded-full ${
                    selectedCategory === category ? "bg-green-500 text-white" : "bg-white"
                  }`}
                >
                  {category}
                </button>
              ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="flex justify-center flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {filteredBooks.slice(0, showMore ? filteredBooks.length : 8).map((book) => (
          <div key={book.id} className="border-0 p-4 rounded-lg shadow-md flex flex-col items-center bg-[#F6F6F6] w-72">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-96 object-fill mb-2 rounded"
            />
            <div className="w-full">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-500">{book.category}</p>
            <p className="text-sm text-gray-600 line-clamp-3">{book.author}</p>
            <p className="text-yellow-500">⭐ {book.rating}</p>            
            </div>
            <Link
              to={`/book/${book.id}`}
              className="mt-3 px-4 py-2 text-black text-center hover:bg-green-600 hover:text-white hover:border-white w-full border border-gray-500 rounded-full"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {filteredBooks.length > 8 && (
          <div className="text-center flex justify-center items-center mt-20">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-2 text-black font-semibold border border-gray-500 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                {showMore ? "View Less" : "View More"}
              </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommended;
