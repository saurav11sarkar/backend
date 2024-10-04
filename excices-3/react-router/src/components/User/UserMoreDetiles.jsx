import { useLoaderData, useNavigate } from "react-router-dom";

const UserMoreDetiles = () => {
    const userMore = useLoaderData();
    const {username,website} = userMore;
    const navigat = useNavigate();

    const handleBack = () =>{
        navigat(-1);
    }
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h2>{username}</h2>
            <h2>{website}</h2>
            <button onClick={handleBack} className="btn btn-accent">Back the user pages</button>
        </div>
    );
};

export default UserMoreDetiles;