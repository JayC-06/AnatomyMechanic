import React from 'react';
import bgImage from './images/logo.jpg';
import Navbar from './components/Navbar';
import './Navbar.css';

function App() {
  return (
    <div
      style={{  
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        color: 'white',
        fontSize: '2rem',
        display: 'flex',
        flexDirection: 'column',  // stack navbar + main content vertically
      }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,  // take remaining space below navbar
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Welcome to Anatomy Mechanic
      </main>
    </div>
  );
}

export default App;
