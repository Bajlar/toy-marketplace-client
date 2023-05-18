import React, { useEffect, useState } from 'react';
import Photo from './Photo';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('gallery.json')
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
      })
  }, [])
  
  return (
    <div>
      <h2 className='text-3xl text-center font-semibold mb-5'>Gallery Photos</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          photos.map(photo => <Photo
            key={photo._id}
            photo={photo}
          ></Photo>)
        }
      </div>
    </div>
  );
};

export default PhotoGallery;