import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import SingUp from './components/SingUp';
import AuthProvider from './provider/AuthProvider';
import Profile from './components/Profile';
import DashBord from './components/DashBord';
import Orders from './components/Orders';
import PrivetRouter from './Routers/PrivetRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/singup",
        element: <SingUp />
      },
      {
        path: "/orders",
        element: <PrivetRouter><Orders/></PrivetRouter>
      },
      {
        path: "/profile",
        element: <PrivetRouter><Profile /></PrivetRouter>
      },
      {
        path: "/dashbord",
        element: <PrivetRouter><DashBord /></PrivetRouter>
      },
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
