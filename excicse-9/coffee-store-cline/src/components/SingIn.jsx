import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const { logInUser } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then(result => {
        console.log(result.user);
        const user = { email, loginAt: result.user?.metadata?.lastSignInTime };
        fetch('http://localhost:5000/user', {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount > 0) {
              toast.success('Successfully Logged In!');  
            }
          })
          .catch(error => {
            toast.error('Failed to update user info.');
            console.error(error);
          });
      })
      .catch(error => {
        toast.error('Log In Failed!');
        console.error(error);
      });

    form.reset();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
