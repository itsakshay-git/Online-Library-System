import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router";
import { images } from "../constant";
import ReactPaginate from 'react-paginate';

const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy", "Biography"];


/**
 * **Books Component**
 * 
 * @Purpose
 * - Displays a list of books with category filtering, search functionality, and pagination.
 * - Fetches books from the Redux store and allows users to navigate through different categories.
 * - Users can search books by title or author.
 * - Paginated results for better user experience.
 * 
 * @Features
 * - **Redux Integration:** Uses `useSelector` to get book data from the Redux store.
 * - **Filtering & Searching:** Users can filter books by category and search by title/author.
 * - **Pagination:** Implements `ReactPaginate` for efficient book browsing.
 * - **Dynamic Routing:** Uses `useParams` and `useLocation` to track category and search query in the URL.
 * 
 * **Key Dependencies:** `react-redux`, `react-router`, `ReactPaginate`
 */

const Books = () => {
  const { category: initialCategory } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get("query") || "";
  const books = useSelector((state) => state.books.books);
  
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All");
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredBooks.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(books.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;
    setItemOffset(newOffset);
  };


  useEffect(() => {
    let filtered = books.filter((book) => 
      (selectedCategory === "All" || book.category.toLowerCase() === selectedCategory.toLowerCase()) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) || 
       book.author.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredBooks(filtered);
  }, [selectedCategory, search, books]);


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      let filtered = books.filter((book) => 
        (selectedCategory === "All" || book.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        (book.title.toLowerCase().includes(search.toLowerCase()) || 
         book.author.toLowerCase().includes(search.toLowerCase()))
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <>
    <div className="p-6 min-h-screen">
      <div>
      <div className="flex flex-col justify-center items-center pt-20 pb-10">
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl'">
        Explore the Best <span className="font-greatvibes text-green-600 p-4">{selectedCategory}</span> Books
        </h1>
        <p className="text-gray-600 mt-2 mb-10 text-sm">Discover a curated selection of <span className="font-greatvibes text-green-600">{selectedCategory}</span> books. Use the search bar to find your next great read.</p>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full max-w-xl">
            <img 
              className="w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              src={images.searchIcon} 
              alt="Search Icon" 
            />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
              className="pl-10 pr-4 py-2 w-full border rounded-full focus:outline-none focus:ring-2"
            />
          </div>
        </div>
      </div>
      </div>

      <div>
      <h1 className="font-bold text-2xl mb-8">Categories</h1>

        <div className="flex justify-center items-center mb-15">
          {/* Category Buttons */}
          <div className="flex gap-5 sm:gap-10 my-4 flex-wrap items-center justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white cursor-pointer ${
                      selectedCategory === category ? "bg-green-500 text-white" : "bg-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="block sm:flex items-center justify-between mb-10">
          <h1 className="font-bold text-2xl mb-10 sm:mb-0"><span className="text-green-600">{selectedCategory}</span> Books</h1>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            previousLabel="< Prev"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            containerClassName="flex justify-center items-center space-x-2"
            pageClassName="border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white transition"
            activeClassName="bg-green-500 text-white"
            previousClassName="border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
            nextClassName="border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
            breakClassName="px-4 py-2 text-gray-500"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>


      {/* Books List */}
      {currentItems.length > 0 ? (
        <div className="flex justify-center flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {currentItems.map((book) => (
            <div key={book.id} className="border-0 p-4 rounded-lg shadow-md flex flex-col items-center bg-[#F6F6F6] w-72">
              <img className="w-full h-96 object-fill mb-2 rounded" src={book.image} alt="" />
              <div className="w-full">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-yellow-500">⭐ {book.rating}/5</p>
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
        </div>
      ) : (
        <p className="text-gray-500 text-center">No books found matching your search.</p>
      )}
      </div>
    </div>
    <div className="my-10 sm:hidden block">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Prev"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        containerClassName="flex justify-center items-center space-x-2"
        pageClassName="border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white transition"
        activeClassName="bg-green-500 text-white"
        previousClassName="border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-200"
        nextClassName="border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-200"
        breakClassName="px-4 py-2 text-gray-500"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
    </>
  );
};

export default Books;
