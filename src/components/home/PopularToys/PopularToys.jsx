import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';

const PopularToys = () => {
  const [popularToys, setPopularToys] = useState([]);

  useEffect(() => {
    fetch('popularToys.json')
      .then(res => res.json())
      .then(data => {
        setPopularToys(data);
      })
  }, [])

  return (
    <div className='my-12'>
      <h2 className='text-3xl text-center font-semibold mb-5'>Popular Toys</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          popularToys.map(popularToy => <SingleToy
            key={popularToy.id}
            popularToy={popularToy}
          ></SingleToy>)
        }
      </div>
    </div>
  );
};

export default PopularToys;