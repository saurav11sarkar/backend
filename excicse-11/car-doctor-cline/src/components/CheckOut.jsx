import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)
    const {title, _id,price, img} = service;
    const handleService = even =>{
        even.preventDefault();
        const form = even.target;
        const name = user?.displayName;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value.replace('$', '');
        const comment = form.comment.value;

        const order = {
            countomerName: name,
            email,
            date,
            price,
            service_id: _id,
            price,
            img,
            title,
            comment
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('Successfully order!')
            }
        })


    }
    return (
        <div>
            <div className=" bg-base-200 ">
                <div className="hero-content flex-col">
                    <div className="card bg-base-100 max-w-xl shrink-0 shadow-2xl">
                        <h2 className="text-3xl py-3 font-semibold text-center text-sky-400">Car Services:{title} </h2>

                        <form className="card-body" onSubmit={handleService}>
                            <div className="flex gap-4">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName || ''} className="input input-bordered w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered w-full px-10" required />

                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due Amount</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered w-full" required />

                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea name="comment" className="input input-bordered w-full h-44"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-info">Order Confirm</button>
                                {/* <Toaster /> */}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;