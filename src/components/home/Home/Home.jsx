import React from 'react';
import Banner from '../Banner/Banner';
import PopularToys from '../PopularToys/PopularToys';

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Banner></Banner>
      <PopularToys></PopularToys>
    </div>
  );
};

export default Home;