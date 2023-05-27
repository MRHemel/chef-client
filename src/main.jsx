import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import ChefSection from './Components/ChefSection/ChefSection.jsx';
import ChefCard from './Components/ChefCard/ChefCard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chef')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
