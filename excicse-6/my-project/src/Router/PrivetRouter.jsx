import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivetRouter;