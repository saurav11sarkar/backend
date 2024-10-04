import { useLoaderData } from "react-router-dom";
import UserDetiles from "./UserDetiles";

const User = () => {
    const users = useLoaderData();
    
    console.log(users);
    return (
        <div>
            <h3>user: {users.length}</h3>

            <div className="grid grid-cols-2 md:grid-cols-3">
                {
                    users.map((user)=> <UserDetiles key={user.id} user={user}></UserDetiles>)
                }
            </div>
        </div>
    );
};

export default User;