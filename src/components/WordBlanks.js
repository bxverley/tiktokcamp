//import stuff you need here
//Tasking No. 2
import React, { Component } from 'react';
import _default from 'react-redux/es/components/connect';
import { wordBankTemp } from '../tempWords';
import { guessedWords } from './InputSystem';
import { checkIfWon } from '../App.js'

export default function WordBlanks() {
  var words = wordBankTemp; //demo wordbank

  let answer = "";
  let wordStatus = null;
  let guessed = [];
  function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
    //alert(answer);
  }

  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    // document.getElementById('blanks').innerHTML = wordStatus //
  }

  // function handleGuess(guessedWords) {
  //   //guessed.indexOf(guessedWords) === -1 ? guessed.push(guessedWords) : null; //if letter is chosen set it as null
    
  //   if (answer.indexOf(guessedWords) >= 0) { //if chosen letter is contained in answer, update wordstatus array
  //     guessedWord();
  //     //checkIfWon();
  //   } else if (answer.indexOf(guessedWords) === -1) {
  //     // update hangman picture here
  //     return null;
  //   }

  //   setTimeout(handleGuess(guessedWords,10000)); //recursive call to keep running the function
  // }


  randomWord();
  guessedWord();
  //handleGuess(guessedWords);
  

  return (
    <div>
        {/* <p id="blanks">blanks</p> */}
        <p className="text-3xl text-black font-bold mb-5">{wordStatus}</p>
    </div>
  )
}