import React from 'react';
import { Link } from 'react-router-dom';
import { Masonry } from 'masonic';
import classes from './MasonryComponent.module.css';

const MasonryComponent = (props) => {
  return (
    <Masonry
      items={props.images}
      columnWidth={360}
      rowGutter={20}
      render={MasonryCard}
    />
  );
}

const MasonryCard = ( {data: { id, src } }) => {
  return (
      <div className={classes['cover']} key={id}>
          <Link to={`/photos/${id}`}>
              <img src={src} />
          </Link>
      </div>
  );
}


export default MasonryComponent;