import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PopularToys from '../PopularToys/PopularToys';
import ShippingReturns from '../ShippingReturns/ShippingReturns';
import useTitle from '../../hooks/useTitle';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
  useTitle('Home');
  
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <ShopCategory></ShopCategory>
      <PhotoGallery></PhotoGallery>
      <PopularToys></PopularToys>
      <ShippingReturns></ShippingReturns>
    </div>
  );
};

export default Home;