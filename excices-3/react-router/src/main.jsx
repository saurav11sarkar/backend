import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Post from './components/Post/post.jsx';
import UserMoreDetiles from './components/User/UserMoreDetiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path: '/user',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path: '/user/:userid',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element:<UserMoreDetiles></UserMoreDetiles>
      },
      {
        path: '/post',
        element:<Post></Post>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
