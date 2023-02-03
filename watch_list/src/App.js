import Header from './components/Header';
import Archive from './components/Archive';
import './App.css';

function App() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='header'>
          <Header />
        </div>
        <div className='archive'>
          <Archive />
        </div>
      </div>
    </div>
  );
}

export default App;
