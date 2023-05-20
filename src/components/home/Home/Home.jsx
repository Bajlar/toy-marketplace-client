import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PopularToys from '../PopularToys/PopularToys';
import ShippingReturns from '../ShippingReturns/ShippingReturns';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <PhotoGallery data-aos="flip-left"></PhotoGallery>
      <PopularToys></PopularToys>
      <ShippingReturns></ShippingReturns>
    </div>
  );
};

export default Home;