import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './PhotoInfo.module.css';

const PhotoInfo = () => {
  const [image, setImage] = useState();

  const params = useParams();

  useEffect(() => {
    const getImage = async () => {
      const url = `https://picsum.photos/id/${params.id}/info`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error('Error!!');

      const newImage = await response.json();
      console.log(newImage);
      setImage(newImage);
    };

    getImage().catch(error => console.log(error));
  }, [params.id]);
  
  if (!image) {
    return (
      <div className={classes['not-found']}>Photo Not Found!!</div>
    );
  }

  return (
    <section className={classes['info']}>
      <img src={image.download_url} />
      <p>{`Author: ${image.author}`}</p>
    </section>
  );
}

export default PhotoInfo;