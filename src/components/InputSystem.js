//import stuff you need here
//Tasking No. 4
import { KeyboardEvent } from "react"
import React, { useState, useEffect, } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addCorrectGuess, addGuessedWord, addWrongWord } from "../hangmanSlice";
import {} from './WordBlanks'

export let guessedWords;

export default function InputSystem(props) {
    //put any custom functions here

    //temp

    const [letter, setLetter] = useState(null);
    
    const alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");

    //check for wrong word, dispatch to the correct list
    //do not dispatch if the word has been set before

    function getLetterPressed(e) {
      e.preventDefault();
      console.log('Letter pressed: ' + e.key);
      const letterPressed = e.key.toLowerCase();
      if (alphabet.includes(letterPressed)) {
        setLetter(letterPressed);
      } else if ( (e.key==='Enter') && (letter != null) ) {
        var guessedWords = hangman.guessedWords
        // console.log(Array.isArray(guessedWords))
        // if key has already been guessed before
        if (guessedWords.includes(letter)) {
          alert("word already guessed");
        } else {
          // update store for guessed word
          console.log("Send " + letter + " to redux");
          dispatch(addGuessedWord(letter))
          //update store for wrong word
          if (!hangman.answer.includes(letter)) {
            console.log("Added wrong letter: " + letter + " to redux");
            dispatch(addWrongWord(letter))
          } else {
            console.log("Added correct letter: " + letter + " to redux");
            dispatch(addCorrectGuess(letter))
          }
          setLetter(null);
        }
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
            <h2>for testing:</h2>
            <h2>guessed: {hangman.guessedWords}</h2>
            <h2>wrong: {hangman.wrongWords}</h2>
            <h2>wins: {hangman.winCounter}</h2>
            <h2></h2>
          </div>
          <div>
            {alphabet.map((alphaLetter,index)=>{
              return <button key={index} className={alphaLetter + " letter"} onClick={() => setLetter(alphaLetter) }>{alphaLetter}</button>
            })}
          </div>
      </div>
    )
}