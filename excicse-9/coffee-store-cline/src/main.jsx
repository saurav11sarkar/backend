import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DasplayCoffee from './components/DasplayCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import SingUp from './components/SingUp.jsx';
import AllUser from './components/AllUser.jsx';
import SingIn from './components/SingIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <DasplayCoffee></DasplayCoffee>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee />
      },
      {
        path: '/updatedcoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>
      },
      {
        path: '/singin',
        element: <SingIn></SingIn>
      },
      {
        path: '/user',
        element:<AllUser></AllUser>,
        loader: ()=> fetch('http://localhost:5000/user')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
