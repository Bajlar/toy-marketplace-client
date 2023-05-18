import React from 'react';

const SingleToy = ({ popularToy }) => {
  // console.log(popularToy);
  const { name, image, price, details} = popularToy;

  return (
    <div className="card bg-base-100 shadow-xl">
      <img src={image} className='h-64 rounded-md' alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>Price: <span className='text-orange-600 font-bold'>$</span> {price}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SingleToy;