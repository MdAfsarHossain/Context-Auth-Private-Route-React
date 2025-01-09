import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {logInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const hanldeLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;


    // Login user
    logInUser(email, password)
    .then(result => {
      console.log("User logged in successfully!", result.user);
      e.target.reset();
      // navigate('/');

      navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
      console.error(error);
    })

    // console.log("Login Successfully!", email, password);

    // Sign In with email and password
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log("User Sign In successfully!", result.user);
    //     e.target.reset();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col w-96">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={hanldeLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="">
              <p>
                New Here? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
