import './App.css';
import Reviews from './Reviews';

function App() {
  return (
    <div className='app'>
      <h2 className='app__title'>Our Reviews</h2>
      <div className='underline'></div>
      <div className='section'>
        <Reviews />
      </div>
    </div>
  );
}

export default App;
