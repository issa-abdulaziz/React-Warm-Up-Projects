import React from 'react';
import { useStateValue } from './StateProvider';

function Menu() {
  const [{ items }, dispatch] = useStateValue();
  return (
    <div className='menu'>
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div key={id} className='menu__item'>
            <img className='menu__item__image' src={img} alt={title} />
            <div className='menu__item__info'>
              <header className='menu__item__header'>
                <h4 className='menu__item__title'>{title}</h4>
                <p className='meny__item__price'>${price}</p>
              </header>
              <p className='menu__item_desc'>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
