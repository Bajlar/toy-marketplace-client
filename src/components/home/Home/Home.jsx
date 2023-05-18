import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PopularToys from '../PopularToys/PopularToys';

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <PopularToys></PopularToys>
    </div>
  );
};

export default Home;