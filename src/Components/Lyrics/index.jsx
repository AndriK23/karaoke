import React, { useState } from 'react';


const Lyrics = ( {lines, currentLineIndex}  ) => {
    
    // console.log(lines.length);
    console.log("currentLineIndex");
    console.log(currentLineIndex);
        


    return(
        <div> 

        {lines.map( (line, index) => { return ( 
        <div key = {index} > 
        <p className = { currentLineIndex === index ? 'current-line' : ''} > {line.text} </p>         
        </div>
        )  }   )}  
        
        </div> 
    )
}



export default Lyrics;

