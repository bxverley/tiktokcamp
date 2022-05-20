//import stuff you need here
//Tasking No. 4
import { KeyboardEvent } from "react"
import React, { useState, useEffect, } from 'react';


export default function InputSystem() {
    //put any custom functions here

    const [letter, setLetter] = useState(null);

    const alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");

    function getLetterPressed(e) {
      e.preventDefault();
      console.log('Letter pressed: ' + e.key);
      const letterPressed = e.key.toLowerCase();
      if (alphabet.includes(letterPressed)) {
        setLetter(letterPressed);
      } else if ( (e.key==='Enter') && (letter != null) ) {
        console.log("Send " + letter + " to redux");
        setLetter(null);
      }
    }

    
    useEffect(() => {
      // button animation + sound effect
      // other stuff
    });
    
    
    return (
      <div tabIndex="0" onKeyDown={getLetterPressed}>
          <h1>Input: {letter} </h1>
          <div>
            {alphabet.map((alphaLetter,index)=>{
              return <button key={index} className={alphaLetter + " letter"} onClick={() => setLetter(alphaLetter) }>{alphaLetter}</button>
            })}
          </div>
      </div>
    )
}