import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/fireBase.config";
import { useRef, useState } from "react";

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                if(user.emailVerified){
                    setSuccess("User Loged in successFully");
                }else{
                    alert('please verify your email address');
                }
            })
            .catch(error => {
                setError(error.message);
            });

        e.target.reset();
    };

    const handleReset = () => {
        const email = emailRef.current.value;
        if (!email) {
            setError('Please enter your email address first.');
            return;
        }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            console.log('please write a valid email');
            return
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email for reset instructions.');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>

                        {/* Email input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* Password input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="w-full input input-bordered" required />
                                <span className="absolute right-3 top-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" onClick={handleReset} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* Login button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {/* Sign Up Link */}
                    <p className="text-center">No account? <Link className="text-red-600" to={'/register'}>Sign Up</Link></p>

                    <div className="text-center pb-2">
                        {/* Error and Success messages */}
                        {error && <p className="text-red-700 text-sm font-semibold">{error}</p>}
                        {success && <p className="text-green-700 text-sm font-semibold">{success}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
