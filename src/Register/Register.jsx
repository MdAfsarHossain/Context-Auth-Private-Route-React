import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

  const {createUser, registerWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(createUser);

  const hanldeRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Create user
    createUser(email, password)
    .then(result => {
      console.log("User Created Successfully", result.user);
      e.target.reset();

      // update profile
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(result => {
        console.log("Profile Updated Successfully");
      })
      .catch(error => {
        console.error(error);
      });

      navigate("/login");
    })
    .catch(error => {
      console.error(error);
    })

    // console.log('Register Successfully', name, email, password);

    // Create User with email and password
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log("User Created Successfully", result.user);
    //     e.target.reset();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  // Register by google 
  const handleGoogleRegister = (e) => {
    e.preventDefault();
    // console.log("User Register Successfully by using google");
    registerWithGoogle()
    .then(result => {
      console.log("User Register Successfully by using", result.user);
      navigate("/");

    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col w-96">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={hanldeRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter name"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
            
            <div className="">
              <p>
                Already have account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
          <div className="form-control mt-6 w-72 mx-auto">
              <button
              onClick={handleGoogleRegister}
              className="btn btn-primary">GOOGLE</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
