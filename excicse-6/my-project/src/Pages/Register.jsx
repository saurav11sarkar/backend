import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createUserRegister } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');  // Clear previous error
        setSuccess('');  // Clear previous success

        // Validate if necessary

        createUserRegister(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        setSuccess(`${name} has been signed up successfully!`);
                        console.log(user)
                        e.target.reset();  
                    })
                    .catch(error => setError(error.message));
            })
            .catch(error => setError(error.message));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <p className="text-center">Already have an account? <Link className="text-red-600" to="/login">Login</Link></p>
                        {/* Error or success messages */}
                        {error && <p className="text-red-700 text-sm font-semibold">{error}</p>}
                        {success && <p className="text-green-700 text-sm font-semibold">{success}</p>}
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
