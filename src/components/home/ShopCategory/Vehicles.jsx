import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Vehicles = ({ vc, handleTapDetails }) => {
  const { _id, img, name, price, rating } = vc;
  const { user } = useContext(AuthContext);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {name}</h2>
        <p>
          Price: <span className="text-orange-500 font-bold">$</span> {price}
        </p>
        <p>Rating: {rating}</p>
        <div className="card-actions">
          {user?.email ? (
            <button
              onClick={() => handleTapDetails(_id)}
              className="btn btn-outline btn-secondary capitalize"
            >
              Details
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-secondary capitalize">
                Details
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;