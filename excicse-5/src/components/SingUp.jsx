import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SingUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSingUp = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            updateProfile(user, {displayName: name})
            .then(()=>{
                console.log(user)
            })
            .catch(error=> console.error(error))
        })
        .catch(error=>console.error(error))

        e.target.reset()

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Sing Up!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSingUp}>

                        {/* name */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        {/* email */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* password */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sing Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;