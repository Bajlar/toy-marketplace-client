import React from 'react';

const Photo = ({ photo }) => {
  // console.log(photo);
  const { image } = photo;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
    </div>
  );
};

export default Photo;