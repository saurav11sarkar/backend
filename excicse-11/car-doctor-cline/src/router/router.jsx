import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home/Home";
import About from "../components/Home/About";
import SingUp from "../components/SingUp";
import Login from "../components/Login";
import CheckOut from "../components/CheckOut";
import PrivetRouter from "./PrivetRouter";
import NewBooking from "../components/NewBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
          path: '/singup',
          element: <SingUp></SingUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/checkout/:id',
          element: <PrivetRouter><CheckOut></CheckOut></PrivetRouter>,
          loader: ({params})=>fetch(`http://localhost:5000/carservice/${params.id}`)
        },
        {
          path: '/booking',
          element: <PrivetRouter><NewBooking></NewBooking></PrivetRouter>
        }

      ]
    },
  ]);

  export default router;