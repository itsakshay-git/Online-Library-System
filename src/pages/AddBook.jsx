import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Redux/bookSlice";
import { useNavigate } from "react-router-dom";


/**
 * **AddBook Component**
 * 
 * @Purpose
 * - Provides a form to add a new book to the Redux store.
 * - Allows users to input book details including title, author, category, rating, description, and an image.
 * - Performs form validation before submission.
 * - Redirects to the book category page after adding a book.
 * 
 * @Features
 * - **State Management:** Uses `useState` to handle form inputs and errors.
 * - **Redux Integration:** Uses `useDispatch` to add books to the global state.
 * - **Form Validation:** Ensures required fields are filled, rating is within 1-5, and an image is provided.
 * - **Live Image Preview:** Displays a preview of the uploaded book cover.
 * - **Navigation:** Uses `useNavigate` to redirect after submission.
 * 
 * **Key Dependencies:** `react-redux`, `react-router-dom`
 */

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "Fiction",
    rating: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setBook({ ...book, image: imageUrl });
      setErrors({ ...errors, image: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!book.title.trim()) newErrors.title = "Book title is required.";
    if (!book.author.trim()) newErrors.author = "Author name is required.";
    if (!book.description.trim()) newErrors.description = "Description is required.";
    if (!book.image) newErrors.image = "Book cover image is required.";
    if (!book.rating || book.rating < 1 || book.rating > 5) newErrors.rating = "Rating must be between 1 and 5.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(addBook({ ...book, id: Date.now() }));
    navigate("/books/" + book.category.toLowerCase());
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-center py-20 text-5xl sm:text-6xl md:text-5xl lg:text-7xl">
        Add a <span className="text-green-600 font-greatvibes">New</span> Book
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {/* Book Title */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            className="p-3 border border-gray-500 rounded-full w-full focus:ring"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Author */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2">
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            className="p-3 border border-gray-500 rounded-full w-full focus:ring"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>

        {/* Category Dropdown */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2">
          <select
            name="category"
            value={book.category}
            onChange={handleChange}
            className="p-3 border border-gray-500 rounded-full w-full focus:ring"
          >
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>

        {/* Rating */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2">
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={book.rating}
            onChange={handleChange}
            className="p-3 border border-gray-500 rounded-full w-full focus:ring"
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        {/* Image Upload */}
        <div className="col-span-1 sm:col-span-3 md:col-span-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-3 border border-gray-500 rounded-full w-full focus:ring"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        {/* Description */}
        <div className="col-span-1 sm:col-span-2 md:col-span-5">
          <textarea
            name="description"
            placeholder="Book Description"
            value={book.description}
            onChange={handleChange}
            className="p-3 border border-gray-500 rounded-lg w-full h-32 focus:ring"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="col-span-1 sm:col-span-2 md:col-span-2 flex justify-center">
            <img src={preview} alt="Book Preview" className="w-24 h-24 object-cover rounded-lg shadow-md" />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-1 sm:col-span-2 md:col-span-5 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
