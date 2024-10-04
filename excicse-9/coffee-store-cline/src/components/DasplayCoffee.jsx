import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import ShowCoffee from "./ShowCoffee";

const DasplayCoffee = () => {
    const loaderUser = useLoaderData();
    const [users, setUsers] = useState(loaderUser);
  return (
    <div>
        <h2 className="mb-4 text-center text-2xl font-bold text-cyan-500">All Coffee</h2>

        <div className="grid grid-cols-2 gap-4">
            {
                users.map(user=><ShowCoffee key={user._id} users={users} setUsers={setUsers} user={user}></ShowCoffee>)
            }
        </div>
    
    </div>
  )
}

export default DasplayCoffee;