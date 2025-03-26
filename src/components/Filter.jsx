import React, { useState }  from 'react'
import { useNavigate } from "react-router";


/**
 * **Filter Component**
 * 
 * @Provides a **search bar** and a **category filter** for book searches.  
 * @Navigates to a filtered book list based on user input.
 * 
 * **Features:**
 * - Search input with **Enter key** support  
 * - Dropdown to select book **category**  
 * - Redirects to `/books/:category?query=searchTerm`
 * 
 * **Dependencies:** React, `useNavigate` from React Router.
 */


const Filter = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("Fiction"); 

    const handleSearch = () => {
      if (search.trim() === "") {
        alert("Please enter a search term.");
        return;
      }
      navigate(`/books/${category}?query=${search}`);
    };
  

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center p-4 px-8">

    <input
      type="text"
      placeholder="Search books..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyPress}
      className="p-2 px-4 border border-gray-500 rounded-full w-full sm:w-[70%]"
    />

    <select
      value={category}
      placeholder="category"
      onChange={(e) => setCategory(e.target.value)}
      className="p-2 border border-gray-500 rounded-full w-full sm:w-[40%]"
    >
      <option value="Fiction">Fiction</option>
      <option value="Non-Fiction">Non-Fiction</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Mystery">Mystery</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Biography">Biography</option>
    </select>
  </div>
  )
}

export default Filter