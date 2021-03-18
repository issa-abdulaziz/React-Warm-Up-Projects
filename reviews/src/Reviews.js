import React, { useEffect, useState } from 'react';
import data from './data';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Reviews() {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(data[index]);
  const { name, job, image, text } = review;
  useEffect(() => {
    setReview(data[index]);
  }, [index]);
  const handlePrev = () => {
    if (index === 0) setIndex(data.length - 1);
    else setIndex(index - 1);
  };
  const handleNext = () => {
    if (index === data.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  const handleRandom = () => {
    const rand = Math.floor(Math.random() * data.length);
    if (index === rand) handleNext();
    else setIndex(rand);
  };
  return (
    <div className='review'>
      <div className='review__image'>
        <img src={image} alt='' />
        <FormatQuoteIcon />
      </div>
      <h4>{name}</h4>
      <p className='review__job'>{job}</p>
      <p className='review__text'>{text}</p>
      <div className='review__buttons'>
        <button onClick={handlePrev}>
          <NavigateBeforeIcon />
        </button>
        <button onClick={handleNext}>
          <NavigateNextIcon />
        </button>
      </div>
      <button onClick={handleRandom} className='review__random'>
        random
      </button>
    </div>
  );
}

export default Reviews;
