import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const {user, loader} = useContext(AuthContext);

    if(loader){
        return
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivetRouter;