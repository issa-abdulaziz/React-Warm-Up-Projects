import React from 'react';
import { getCategories } from './reducer';
import { useStateValue } from './StateProvider';

function Filter() {
  const [{ items }, dispatch] = useStateValue();
  return (
    <div className='filter'>
      {getCategories().map((category, index) => {
        return (
          <button
            key={index}
            type='button'
            onClick={() =>
              dispatch({ type: 'FILTER_MENU', category: category })
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
