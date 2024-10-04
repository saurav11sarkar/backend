import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";

const Root = () => {
    return (
        <>
            <div className="max-w-screen-xl m-auto">
                <Header></Header>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Root;