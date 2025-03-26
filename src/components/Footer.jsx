import { Link } from "react-router";


/**
 * **Footer Component**
 * 
 * @Displays site navigation, social media links, and copyright info.  
 * - **Sections:** Branding, Navigation, Social Links, Legal Links.  
 * - **Responsive design.**  
 * 
 ***Dependency:** `Link` from React Router.
 */


const Footer = () => {
    return (
      <footer className="bg-[#EBEBEB] rounded-xl m-8 p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mt-8">

          <div className="md:w-1/3 text-center sm:text-center md:text-left">
            <h2 className="text-2xl font-bold text-green-600 mb-8">
              Online <span className="text-blue-600">Library</span>
            </h2>
            <p className="text-gray-700 text-sm mt-2 w-full sm:w-[80%] mb-8">
              Discover a world of knowledge with our vast collection of books. 
              Whether you love Fiction, Non-Fiction, Sci-Fi, or more, we have something for everyone!
            </p>
          </div>
  
          <div className="flex gap-20 w-full sm:w-[25%] md:w-[50%] lg:w-[25%]">
          <div className="mt-4 md:mt-0 md:w-1/3 text-left sm:text-right">
            <ul className="text-gray-800 space-y-2">
              <li><Link to="/" className="hover:underline hover:text-green-500">Home</Link></li>
              <li><Link to="/books" className="hover:underline hover:text-green-500">Browse Books</Link></li>
              <li><Link to="/addbooks" className="hover:underline hover:text-green-500">Add Books</Link></li>
            </ul>
          </div>
  

          <div className="mt-4 md:mt-0 md:w-1/3 text-center md:text-right">
            <ul className="text-gray-800 space-y-2">
              <li><a href="#" className="hover:underline hover:text-green-500">Instagram</a></li>
              <li><a href="#" className="hover:underline hover:text-green-500">Facebook</a></li>
              <li><a href="#" className="hover:underline hover:text-green-500">Pinterest</a></li>
            </ul>
          </div>
          </div>
        </div>
  

        <div className="mt-6 border-t pt-3 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between">
          <p>© 2024. All rights reserved to Communion</p>
          <div className="flex justify-center space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline hover:text-green-500">Privacy Policy</a>
            <a href="#" className="hover:underline hover:text-green-500">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  