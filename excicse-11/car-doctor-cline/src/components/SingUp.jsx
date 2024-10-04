import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
const SingUp = () => {
    const {creatUser} = useContext(AuthContext);
    const naviget = useNavigate()

    const handleSignup = even =>{
        even.preventDefault();
        const form = even.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        creatUser(email, password)
        .then(result => {
            const user = result.user;
            updateProfile(user, {displayName: name})
            .then(()=>{
                console.log(user)
                naviget('/')
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src={img} alt="Signup illustration" />
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Sign Up</h1> {/* Changed Sing Up to Sign Up */}

                            <form onSubmit={handleSignup}> {/* Changed handleSingup to handleSignup */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-info">Signup</button> {/* Changed Singup to Signup */}
                                </div>
                            </form>
                            <p className="text-center">
                                Already have an account? {/* Fixed typo: Alrady -> Already */}
                                <Link className="text-sky-400 font-semibold" to="/login">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;