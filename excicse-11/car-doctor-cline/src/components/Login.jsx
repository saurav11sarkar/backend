import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg"
import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
    const {logInUser,resetPassword} = useContext(AuthContext);
    const emailRef = useRef(null)

    const handleLogin = even => {
        even.preventDefault();
        const form = even.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error => console.log(error))

    }

    const forgetPassword =()=>{
        const email = emailRef.current.value;
        if(!email){
            alert('Please chech your email for password reset')
        }
        resetPassword(email)
        .then(()=>{
            alert('Please check ypur email for password reset')
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src={img} alt="Login illustration" />
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        ref={emailRef}
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
                                    <label className="label">
                                        <a
                                            href="#"
                                            onClick={forgetPassword}
                                            // onClick={forgetPassword}
                                            className="label-text-alt link link-hover"
                                        >
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-info">Login</button>
                                </div>
                            </form>
                            <p className="text-center">
                                New to Car Doctors?{" "}
                                <Link className="text-sky-400 font-semibold" to="/singup">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;