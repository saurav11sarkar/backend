import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const AllUser = () => {
    const useLoder = useLoaderData();
    const [users, setUsers] = useState(useLoder);

    const hendleDelete = (id) =>{
        fetch(`http://localhost:5000/user/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Successfully deleted!')
                const remainerUser = users.filter(user => user._id !== id);
                setUsers(remainerUser)
            }
        })

    }

    return (
        <div>
            <h2>All User : {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user,index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.createAt}</td>
                                <td>{user.loginAt}</td>
                                <td>
                                    <button onClick={() => hendleDelete(user._id)} className="btn">X</button>
                                    <Toaster />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;