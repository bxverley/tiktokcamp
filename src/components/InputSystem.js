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
    const row1     = "qwertyuiop".split("");
    const row2     = "asdfghjkl".split("");
    const row3     = "zxcvbnm".split("");

    //check for wrong word, dispatch to the correct list
    //do not dispatch if the word has been set before

    function getLetterPressed(e) {
      e.preventDefault();
      console.log('Letter pressed: ' + e.key);
      const letterPressed = e.key.toLowerCase();
      if (alphabet.includes(letterPressed)) {
        setLetter(letterPressed);
      } else if ( (e.key==='Enter') && (letter != null) ) {
        checkAndSendLetter();
      }
    }

    function checkAndSendLetter() {
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

    //redux stuff here
    const hangman = useSelector(state => state.hangman);
    const dispatch = useDispatch();

    

    
    useEffect(() => {
      // button animation + sound effect
      // other stuff
      var answer = hangman.answer
      console.log("answer prop received by InputSystem: " + answer)
    });
    

    
    let buttonStyling1 = "bg-green-500 hover:bg-green-400 text-black font-bold  border-green-700 hover:border-green-500 rounded"
    let buttonStyling2 = "text-lg py-1 px-2 border-b-4 m-0.5";
    let buttonStyling3 = "md:text-2xl md:py-2 md:px-6 md:border-b-6 md:m-0.5";
    let buttonStyling4 = "lg:text-6xl lg:py-4 lg:px-8 lg:border-b-8 lg:m-1"

    let buttonStyling = buttonStyling1 + " " + buttonStyling2 + " " + buttonStyling3 + " " + buttonStyling4
    return (
      <div tabIndex="0" onKeyDown={getLetterPressed}>
          {/* <h2>Answer: {hangman.answer} delete this when done.</h2> */}
          <div className="bg-green-500 text-black font-bold container mx-auto px-1">
            <h1 className="text-lg md:text-2xl lg:text-4xl">Letter Chosen: {letter} </h1>
          </div>
          {/* <div>
            <h2>for testing:</h2>
            <h2>guessed: {hangman.guessedWords}</h2>
            <h2>wrong: {hangman.wrongWords}</h2>
            <h2>wins: {hangman.winCounter}</h2>
            <h2></h2>
          </div> */}
          <div>
            <div>
            { row1.map((l,index)=>{
              return <button key={index} className={l + " " + buttonStyling} 
              onClick={() => setLetter(l) }>{l}</button>
            })}
            </div>
            <div>
            { row2.map((l,index)=>{
              return <button key={index} className={l + " " + buttonStyling} 
              onClick={() => setLetter(l) }>{l}</button>
            })}
            </div>
            <div>
            { row3.map((l,index)=>{
              return <button key={index} className={l + " " + buttonStyling} 
              onClick={() => setLetter(l) }>{l}</button>
            })}
            </div>
            <div>
              <button onClick={() => checkAndSendLetter() } className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 lg:text-6xl lg:py-4 lg:px-8 lg:border-b-8 lg:m-1 rounded" >Enter</button>
            </div>
          </div>
      </div>
    )
}