import React, { useState } from 'react';


const Lyrics = ( {lines , activeLine } ) => {
    
    console.log(lines)
    
    
   

    return(
        <div> 

        {lines.map( (line, index) => {return <p key = {index} className = 'current-line' >  {line.text} </p> } )}  
        
        </div> 
    )
}



export default Lyrics;

