import React from 'react';

function Tour({ image, name, price, info }) {
  return (
    <div className='tour'>
      <img src={image} alt={name} />
      <div className='tour__details'>
        <div className='tour__details__top'>
          <h4 className='tour__detials__title'>{name}</h4>
          <p className='tour__details__price'>${price}</p>
        </div>
        <p>{info}</p>
        <button className='tour__button'>Not intersted</button>
      </div>
    </div>
  );
}

export default Tour;
