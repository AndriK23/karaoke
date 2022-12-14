import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Player from './Components/Player';
import Lyrics from './Components/Lyrics';
import lines from './lyrics-lines.js'





const App = () => {

  const [currentLineIndex, setActiveLine] = useState(5)
  
  console.log(currentLineIndex);

 

  return (
    <div className="container">
      
      <Player src = 'fools-garden-lemon-tree.mp3' />
      <Lyrics lines = {lines} currentLineIndex = {currentLineIndex} />

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
