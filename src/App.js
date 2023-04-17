import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Account from './components/Account';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='app-body'>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
