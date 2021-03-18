import React, { useEffect, useState } from 'react';
import Tour from './Tour';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }
  return (
    <div className='app'>
      <h2 className='app__title'>Our Tours</h2>
      <div className='app__tours'>
        {tours.map((tour) => (
          <Tour key={tour.id} removeTour={removeTour} {...tour} />
        ))}
        {tours.length === 0 && (
          <button
            className='btn'
            onClick={() => {
              fetchTours();
            }}
          >
            reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
