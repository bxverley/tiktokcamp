//import stuff you need here
//Tasking No. 5 + put a wordbank file in src/
import {useSelector, useDispatch} from 'react-redux';

export default function ScoreDisplay() {
    //put any custom functions here

    //Redux stuff
    const hangman = useSelector(state => state.hangman);
  
    return (
      <div>
          <h1>Current Score: {hangman.winCounter} </h1>
      </div>
    )
}