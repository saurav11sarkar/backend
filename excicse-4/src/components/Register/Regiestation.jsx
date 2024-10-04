import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/fireBase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Regiestation = () => {
    const [error, setError] = useState('')
    const [succes, setSucces] = useState('')
    const [passWord, setPassWord] = useState(false);

    const handeleSingUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;

        setError('')
        setSucces('')

        console.log(name, email, password);
        const passwordRegex = /[A-Z]/;


        if (password.length < 6) {
            setError("You password should be at least 6 charcters or logher");
            return;
        } else if (!passwordRegex.test(password)) {
            setError("Your password should be at lest upper case");
            return;
        } else if (!checkbox){
            setError("please accept our terms");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                updateProfile(user, { displayName: name })
                    .then(() => {
                        setSucces(`${name} is sing up`)
                    })
                    .catch((error) => {
                        console.error(error.code)
                        setError(error.message)
                    })
            })
            .catch(error => {
                console.error(error.code)
                console.error(error.message)
            })

        e.target.reset();

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-11">Regiestion Now</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handeleSingUp}>
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Full Name" className="input input-bordered" required />
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
                            <div className="relative w-full">
                                <input type={passWord ? "text" : "password"} name="password" placeholder="password" className=" w-full input input-bordered" required />
                                <span className="absolute right-3 top-2" onClick={() => setPassWord(!passWord)}>{passWord ? "Hide" : "Show"}</span>
                            </div>

                        </div>

                        {/* checkbox */}

                        <div>
                            <input type="checkbox" name="checkbox" id="terms" />
                            <label htmlFor="terms" className="ml-2">Accept our <a href="#">Trem and Conditions</a></label>
                        </div>

                        {/* sing up */}

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sing Up</button>
                        </div>

                    </form>
                    {/* login */}
                    <p className="text-center">Already have an account? <Link className="text-red-600" to={'/'}>Login</Link></p>

                    {/* error and success */}
                    <div className="text-center pb-2">
                        {
                            error && <p className="text-red-700 text-sm font-semibold">{error}</p>
                        }
                        {
                            succes && <p className="text-green-700 text-sm font-semibold">{succes}</p>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Regiestation