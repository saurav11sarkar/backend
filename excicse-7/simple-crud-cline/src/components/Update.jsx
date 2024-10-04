import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loaderUser = useLoaderData();
    const handleUpdate = (even) => {
        even.preventDefault();
        const form = even.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };

        fetch(`http://localhost:5000/users/${loaderUser._id}`,{
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert('user update successfully')
            }
        })
    }
    return (
        <div>
            <h3>{loaderUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loaderUser?.name} placeholder="Name" />
                <br />
                <input type="email" name="email" defaultValue={loaderUser?.email} placeholder="email" />
                <br />
                <input type="submit" value="Update" />

            </form>
        </div>
    );
};

export default Update;