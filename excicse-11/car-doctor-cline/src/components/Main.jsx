import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
    return (
        <>
            <div className="max-w-screen-xl m-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;