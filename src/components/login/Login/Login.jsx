import React from 'react';
import login from '../../../assets/images/login/login-img.gif';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userLogin = { email, password };
    console.log(userLogin);
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-16">
          <img src={login} className="rounded-2xl" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <div className="card-body">
            <h1 className="text-5xl text-red-500 font-bold text-center">
              Login
            </h1>
            <form onSubmit={handleLogin}>
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
              <div className="form-control w-1/2 mx-auto mt-6">
                <input
                  className="btn btn-secondary capitalize"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <div className="text-center mt-7">
                <p>Or Sign In with Google</p>
                <div className="flex justify-center gap-4 mt-4">
                  <button className="btn btn-circle bg-[#be5e4b] hover:bg-[#FF3811]">
                    <FaGoogle></FaGoogle>
                  </button>
                </div>
                <p className="mt-4">
                  New to site go to?
                  <Link to="/signUp">
                    <span className="text-[#FF3811]"> Sign In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;