import React, { useState } from 'react';
import './Tour.css';

function Tour({ id, image, name, price, info, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className='tour'>
      <img src={image} alt={name} />
      <div className='tour__details'>
        <div className='tour__details__top'>
          <h4 className='tour__title'>{name}</h4>
          <p className='tour__price'>${price}</p>
        </div>
        <p className='tour__info'>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className='tour__showMore'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'show more'}
          </button>
        </p>

        <button
          type='button'
          className='tour__button'
          onClick={() => {
            removeTour(id);
          }}
        >
          Not intersted
        </button>
      </div>
    </div>
  );
}

export default Tour;
