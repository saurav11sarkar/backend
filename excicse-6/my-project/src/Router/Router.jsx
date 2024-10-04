import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cereer from "../Pages/Cereer";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRouter from "./PrivetRouter";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                path: '/cereer',
                element: <Cereer></Cereer>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])