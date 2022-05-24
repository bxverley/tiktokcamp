//import stuff you need here
//Tasking No. 4
import { KeyboardEvent } from "react"
import React, { useState, useEffect, } from 'react';
import { useSelector, useDispatch } from "react-redux";


export default function InputSystem(props) {
    //put any custom functions here

    //temp

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

    //redux stuff here
    const hangman = useSelector(state => state.hangman);
    const dispatch = useDispatch();

    
    useEffect(() => {
      // button animation + sound effect
      // other stuff
      var answer = hangman.answer
      console.log("answer prop received by InputSystem: " + answer)
    });
    
    
    return (
      <div tabIndex="0" onKeyDown={getLetterPressed}>
          <h2>Answer: {hangman.answer} delete this when done.</h2>
          <h1>Input: {letter} </h1>
          <div>
            {alphabet.map((alphaLetter,index)=>{
              return <button key={index} className={alphaLetter + " letter"} onClick={() => setLetter(alphaLetter) }>{alphaLetter}</button>
            })}
          </div>
      </div>
    )
}