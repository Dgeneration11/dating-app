import React from 'react'
import TinderCard from 'react-tinder-card';
import './App.css';
import Header from './Header';
import Cards from './Cards';

function App() {
  return (

    // BEM class naming convention
    <div className="app">
      {/* Header */}
      <Header />


      {/* Tinder Cards */}
      <Cards />


      {/* Swipe Buttons */}

    </div>
  );
}

export default App;


