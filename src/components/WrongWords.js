//import stuff you need here
//Tasking No. 3
import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';


export default function WrongWords() {
    //put any custom functions here
    //let word = ['A', 'P', 'P', 'L', 'E'];
    //let wrongLetters = ['O','R','D']

    //Redux Stuff
    const hangman = useSelector(state => state.hangman);
    const dispatch = useDispatch();

    

    // const updateWrongLetter = letter => {
    //     if (word.includes(letter) === false) {
    //         wrongLetters.push(letter);
    //     }
    //     return wrongLetters
    // }

    // removed className="text-white font-bold mb-5" 

    class StrikeThrough extends React.Component {
        render() {
            return (
                <div className="text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#82ac85] p-4 border-2 border-gray-900">
                    <h2 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', textDecorationColor: 'black'}}>
                    {/* {wrongLetters} */}
                    <h2>
                        {/* this is redux */}
                        {hangman.wrongWords.map(word => (
                            <div key={word}>{word}</div>
                        ))}
                    </h2>
                    </h2>
                </div>
            )
        }
    }
  
    return (
      <div>
        <StrikeThrough />
      </div>
    )
}

//Text component does not exist, the render part was abit off




