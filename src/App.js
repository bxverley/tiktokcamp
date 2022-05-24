import './App.css';
import Graphics from './components/Graphics';
import WordBlanks from './components/WordBlanks';
import WrongWords from './components/WrongWords';
import InputSystem from './components/InputSystem';
import ScoreDisplay from './components/ScoreDisplay';
import { wordBankTemp } from './tempWords';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { store } from './store';
import { setAnswer } from './hangmanSlice';

function App() {

  var answer = "";

  //Redux stuff
  const hangman = useSelector(state => state.hangman);
  const dispatch = useDispatch();
  

  function randomWord() {
    answer = wordBankTemp[Math.floor(Math.random() * wordBankTemp.length)];
    //alert(answer);
  }

  // function setAnswer(answer) {
  //   return {
  //     type: 'setAnswer',
  //     payload: { answer },
  //   }
  // }

  function passDownNewAnswer() {
    randomWord();
    console.log("Loaded random word: " + answer);
    dispatch(setAnswer(answer))
    answer = hangman.answer
  }
  passDownNewAnswer();

  // useEffect(() => {
  //   passDownNewAnswer
  // }, []);

  useEffect(() => {
    answer = hangman.answer
    console.log("App: " + answer + " is the answer.")
  });


  return (
    <div className="App">
      <Graphics/>
      <WordBlanks/>
      <WrongWords/>
      <InputSystem/>
      <ScoreDisplay/>
    </div>
  );
}

export default App;
