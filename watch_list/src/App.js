// import { useState } from 'react';
import Header from './components/Header';
import Archive from './components/Archive';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';

function App() {
  return (
    <div className='container-fluid'>
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
