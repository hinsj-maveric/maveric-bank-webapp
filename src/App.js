import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='app-body'>
        text
      </div>
      <Footer/>
    </div>
  );
}

export default App;
