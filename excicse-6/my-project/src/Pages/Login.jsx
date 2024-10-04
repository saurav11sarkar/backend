import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { signInUser, forgetPassword } = useContext(AuthContext);  
    const [email, setEmail] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const password = e.target.password.value;

        signInUser(email, password)  
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(location.state?.from || '/');
                e.target.reset();
            })
            .catch((error) => console.log(error));
    };

    const handlePasswordReset = () => {  
        if (!email) {
            alert('Please enter your email to reset your password.');
            return;
        }
        forgetPassword(email)
            .then(() => {
                alert('Please check your email for reset instructions.');
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login</h1>  
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="email" 
                                className="input input-bordered" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                <button 
                                    type="button" 
                                    onClick={handlePasswordReset} 
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p className="text-center">
                            Don't have an account? <Link className="text-red-600" to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
