import './App.css';
import '../src/components/Graphics.css'
import Title from './components/Title';
import Graphics from './components/Graphics';
import WordBlanks from './components/WordBlanks';
import WrongWords from './components/WrongWords';
import InputSystem from './components/InputSystem';
import ScoreDisplay from './components/ScoreDisplay';
import { wordBankTemp } from './tempWords';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { store } from './store';
import { clearAllGuesses, incrementWinCounter, setAnswer, toggleGameOver } from './hangmanSlice';

function App() {

  //Redux stuff
  const hangman = useSelector(state => state.hangman);
  const dispatch = useDispatch();
  

  function randomWord() {
    var answer = wordBankTemp[Math.floor(Math.random() * wordBankTemp.length)];
    return answer
    //alert(answer);
  }

  // function setAnswer(answer) {
  //   return {
  //     type: 'setAnswer',
  //     payload: { answer },
  //   }
  // }

  useEffect(() => {
    passDownNewAnswer();
  }, []);

  function passDownNewAnswer() {
    var answer = randomWord();
    console.log("Loaded random word: " + answer);
    answer = answer.toLowerCase();
    dispatch(setAnswer(answer));
    answer = hangman.answer;
  }

  function checkIfWon() {
    var answer = hangman.answer.split("");
    // remove duplicate words
    var uniqueAnswer = [...new Set(answer)];
    var correctGuesses = hangman.correctGuesses;
    var a = uniqueAnswer;
    var b = correctGuesses;
    if ( a.every(item => b.includes(item)) && b.every(item => a.includes(item)) ) {
      return true
    } else {
      return false
    }

  }
  // passDownNewAnswer();

  function checkIfLose() {
    if (hangman.wrongWords.length >= 6) {
      dispatch(toggleGameOver());
    }
    return hangman.gameOver
  }

  


  useEffect(() => {
    var answer = hangman.answer;
    console.log("App: " + answer + " is the answer.");
    var win = checkIfWon();
    if (win) {
      passDownNewAnswer();
      dispatch(clearAllGuesses());
      dispatch(incrementWinCounter());
    }
    var lose = checkIfLose();
    if (lose) {
      var score = hangman.winCounter
      alert("Game Over. Your final score: " + score)
    }
  });


  return (
    <div className="App">
      <Title/>
      <Graphics/>
      <WordBlanks/>
      <WrongWords/>
      <InputSystem/>
      <ScoreDisplay/>
    </div>
  );
}

export default App;
