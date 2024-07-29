import React from 'react';
import NavBar from './NavBar'; // Import NavBar from its file
import Home from './Home'; // Import Home from its file

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
