# Online Library System
# Live Demo
https://online-library-system-one.vercel.app/
![Screenshot 2025-03-26 220004](https://github.com/user-attachments/assets/f30fce4d-dbd0-4af6-9d5a-1e591538f2ed)

## Project Overview

The **Online Library System** is a web-based application built with React and Redux that allows users to browse, search, and view book details. The app includes a category-based filtering system, a search feature, pagination, and a detailed book view page. It also utilizes GSAP animations and provides a responsive UI for seamless user experience.

## Technologies Used

- React.js
- Redux (State Management)
- React Router (Navigation)
- Tailwind CSS (Styling)
- React Pagination

## Folder Structure

```
src/
│── assets/                  # Folder for static assets like images
│── components/              # Reusable UI components
│   ├── EffectCard.jsx       # Card component with effects
│   ├── Filter.jsx           # Category filter component
│   ├── Footer.jsx           # Footer component
│   ├── Navbar.jsx           # Navigation bar component
│   ├── Newsletter.jsx       # Newsletter subscription component
│   ├── Recommended.jsx      # Recommended books component
│   ├── SwiperComponent.jsx  # Swiper for book recommendations
│   ├── SwiperNavButtons.jsx # Swiper navigation buttons
│── constant/                # Constant data
│   ├── images.js            # Image assets
│   ├── index.js             # Centralized constants
│── pages/                   # Application pages
│   ├── AddBook.jsx          # Add book page (future feature)
│   ├── Books.jsx            # Books listing page with filtering and pagination
│   ├── BooksDetail.jsx      # Individual book details page
│   ├── ErrorPage.jsx        # Error page for 404
│   ├── Home.jsx             # Home page with featured books
│── Redux/                   # Redux store configuration
│   ├── bookSlice.js         # Redux slice for book management
│   ├── store.js             # Redux store setup
│── utils/                   # Utility functions
│   ├── recommended.js       # Recommended books data
│── App.css                  # Global styles
│── App.jsx                  # Root component
```

## Features

- Browse books by category
- Search books by title or author
- View detailed book information
- Pagination for better navigation
- Responsive design for all screen sizes

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/itsakshay-git/Online-Library-System
   ```
2. Navigate to the project folder:
   ```sh
   cd online-library-system
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## Contributors

- **Akshay Dhongade** - Developer

