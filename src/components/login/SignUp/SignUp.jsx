import React, { useContext } from 'react';
import login from "../../../assets/images/login/login-img.gif";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {

  const { createUser, googleSignUp } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const userSignUp = { name, email, password, photo };
    // console.log(userSignUp);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log("created user", user);
        Swal.fire({
          title: "Success!",
          text: "Your Register is successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        form.reset();
      })
      .catch((error) => console.log(error));
  }

  const handleGoogleSignIn = () => {
    // console.log('google button click');
    googleSignUp()
      .then((result) => {
        const googleSign = result.user;
        // console.log(googleSign);
        if (googleSign) {
          Swal.fire({
            title: "Success!",
            text: "Google login successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-16">
          <img src={login} className="rounded-2xl" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <div className="card-body">
            <h1 className="text-5xl text-red-500 font-bold text-center">
              Register Now
            </h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label text-2xl font-semibold">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label text-2xl font-semibold">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-2xl font-semibold">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input shadow-2xl"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-2xl font-semibold">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Your Photo URL"
                  className="input shadow-2xl"
                  required
                />
              </div>
              <div className="form-control w-1/2 mx-auto mt-6">
                <input
                  className="btn btn-secondary capitalize"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="text-center mt-7">
                <div className="text-center mt-7">
                  <p>Or Sign In with Google</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      onClick={handleGoogleSignIn}
                      className="btn btn-circle border-none bg-amber-700 hover:bg-[#FF3811]"
                    >
                      <FaGoogle></FaGoogle>
                    </button>
                  </div>
                  <p className="mt-4">
                    Already Have an Account?
                    <Link to="/login">
                      <span className="text-[#FF3811]"> Login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;