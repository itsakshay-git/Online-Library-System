import { createBrowserRouter,  RouterProvider, } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import BooksDetail from "./pages/BooksDetail.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import AddBook from "./pages/AddBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use layout wrapper
    errorElement: <ErrorPage />, // Global error page
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:category",
        element: <Books />,
      },
      {
        path: "book/:id",
        element: <BooksDetail />,
      },
      {
        path: "addbooks",
        element: <AddBook />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
)
