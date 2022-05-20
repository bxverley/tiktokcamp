import React, { Component } from 'react';

export default function WordBlanks() {
  // var words = ["apple","juice","css","turtle"]; //demo wordbank

  // let answer = "";
  // let wordStatus = null;
  // let guessed = [];

  // function randomWord() {
  //   answer = words[Math.floor(Math.random() * words.length)];
  //   //alert(answer);
  // }

  // function guessedWord() {
  //   wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  //   document.getElementById('blanks').innerHTML = wordStatus //
  // }

  // randomWord();
  // guessedWord();

  return (
    <div>
        <p id="blanks">blanks</p>
    </div>
  )
}