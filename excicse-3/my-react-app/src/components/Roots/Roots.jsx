import { Outlet } from "react-router-dom";
import Foother from "../Footder/Foother";
import Header from "../Header/Header";

const Roots = () => {
    return (
        <>
            <div className="max-w-screen-xl m-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Foother></Foother>
        </>
    );
};

export default Roots;