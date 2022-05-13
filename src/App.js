import logo from './logo.svg';
import './App.css';
import Graphics from './components/Graphics';
import WordBlanks from './components/WordBlanks';
import WrongWords from './components/WrongWords';
import InputSystem from './components/InputSystem';
import ScoreDisplay from './components/ScoreDisplay';

function App() {
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
