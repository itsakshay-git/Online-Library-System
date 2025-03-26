import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../constant";


/**
 * **Navbar Component**
 * 
 * @Responsive navigation bar with desktop and mobile menus.  
 * - **Includes:** Logo, navigation links, login button, and mobile menu toggle.  
 * - **Features:** Mobile-friendly dropdown, animated menu toggle.  
 * 
 * 🚀 **Dependencies:** `useState`, `Link` from React Router.
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="mx-[20px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-green-600">Online</span>
          <span className="text-blue-600"> Library</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-800">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/books" className="hover:text-green-600">Browse Books</Link>
          <Link to="/addbooks" className="hover:text-green-600">Add Book</Link>
        </div>

        {/* Login Button (Desktop) */}
        <div className="hidden md:block relative">
          <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <img src={images.user} alt="user-icon" />
            <span className="ml-2">Login</span>
            <img src={images.expandArrow} alt="user-icon" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <img className="w-[30px] h-[30px]" src={images.closeIcon} alt="close" /> : <img className="w-[30px] h-[30px]" src={images.menuIcon} alt="menu" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all`}>
        <div className="flex flex-col items-center bg-white p-5 space-y-4 shadow-md">
          <Link to="/" className="text-gray-800 hover:text-green-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/books" className="text-gray-800 hover:text-green-600" onClick={() => setIsOpen(false)}>
            Browse Books
          </Link>
          <Link to="/addbooks" className="text-gray-800 hover:text-green-600" onClick={() => setIsOpen(false)}>
            Add Book
          </Link>
          <button
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            <img src={images.user} alt="user-icon" />
            <span className="ml-2">Login</span>
            <img src={images.expandArrow} alt="user-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
