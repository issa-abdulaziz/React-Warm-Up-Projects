import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Question({ id, title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className='question'>
      <header className='question__header'>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <RemoveIcon /> : <AddIcon />}
        </button>
      </header>
      {showInfo && <p className='question__info'>{info}</p>}
    </div>
  );
}

export default Question;
