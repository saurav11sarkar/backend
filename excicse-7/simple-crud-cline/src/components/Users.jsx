import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers);

    const hendleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                    const remaine = users.filter(user => user._id !== _id)
                    setUser(remaine)
                }
            })
    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={() => hendleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;