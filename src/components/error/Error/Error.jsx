import React from 'react';
import error from '../../../assets/images/error/error.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <img src={error} className="rounded-lg" alt="" />
      </div>
      <div className="flex justify-center mt-10">
        <Link to='/'>
          <button className="btn btn-outline btn-secondary capitalize">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;