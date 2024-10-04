import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Meal from './FoodRecipe/Meal.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Product from './Pages/Product.jsx';
import Movies from './Movies.jsx';
import Courses from './Pages/Courses.jsx';
import DashBoard from './Pages/DashBoard.jsx';
import Profile from './Pages/Profile.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/product',
        element: <Product></Product>

      },
      {
        path: '/product/:id',
        element: <Courses></Courses>,

      },
      {
        path: '/meal',
        element: <Meal></Meal>
      },
      {
        path: '/movie',
        element: <Movies></Movies>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
