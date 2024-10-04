import { createBrowserRouter, } from "react-router-dom";
import Root from "../components/Root";
import Home from "../provider/Home";
import About from "../components/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            }
        ]
    },
]);

export default router;