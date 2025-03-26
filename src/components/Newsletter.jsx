import { useState } from "react";
import { images } from "../constant";


/**
 * **Newsletter Component**
 * 
 * @Subscription form for users to receive updates.  
 * - **Includes:** Email input, subscribe button, and confirmation alert.  
 * - **Features:** Email validation, responsive design, interactive UI.  
 * 
 * **Dependencies:** `useState`, `images` (email icon).
 */

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email!");
      return;
    }
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 pt-20 rounded-lg">
      <h2 className=" text-5xl sm:text-6xl md:text-5xl lg:text-7xl">
        Subscribe <span className="italic text-green-500 font-greatvibes">to Our</span> Newsletter
      </h2>
      <p className="text-gray-600 mt-2 mb-10 text-xl">
        Stay updated with the latest book releases and news!
      </p>

      <form onSubmit={handleSubscribe} className="my-10 block sm:flex w-full sm:w-[50%] gap-5">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><img className="w-[20px] h-[20px]" src={images.emailIcon} alt="" /></span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 p-2 border rounded-full focus:outline-none"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-6 rounded-full hover:bg-green-600 transition w-full p-2 mt-3 sm:w-auto sm:mt-0 cursor-pointer">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
