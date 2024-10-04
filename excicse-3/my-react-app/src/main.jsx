import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Roots from './components/Roots/Roots.jsx';
import ErrorPages from './components/ErrorPages/ErrorPages.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import JobDetiles from './components/AppliedJob/JobDetiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job',
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <JobDetiles></JobDetiles>,
        loader: () => fetch('/jobs.json')
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
