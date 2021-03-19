import './App.css';
import Filter from './Filter';
import Menu from './Menu';

function App() {
  return (
    <div className='app'>
      <h2 className='app__title'>Our Menu</h2>
      <div className='underline'></div>
      <Filter />
      <Menu />
    </div>
  );
}

export default App;
