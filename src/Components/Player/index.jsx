import React, { useState } from 'react';
import playButton  from '../../assets/play-icon.svg'
import pauseButton from '../../assets/pause-icon.svg'
import './style.css';
import { useRef, useEffect } from 'react';


const Player = ({src}) => {
    const [playing, setPlaying] = useState(false)

    const audioRef = useRef();
    
    useEffect(() => {
        if (playing) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [playing]);


    const handleClick = () => {
        setPlaying(!playing)
    }

    return (
       

    <div className="container">
         <div className = 'player-controls'> 
        
            <audio ref={audioRef} src = {src} />
       
            <button className='play-button' onClick = {handleClick} > { playing ? <div className = 'play' /> : <div className = 'pause'/> } </button>
        
        </div>
    </div>
  );
};

export default Player;