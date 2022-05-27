import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wrongWords: [],
    correctGuesses: [],
    guessedWords: [],
    gameOver: false,
    answer: "",
    winCounter: 0,
}

export const hangmanSlice = createSlice ({
    name: 'hangman',
    initialState,
    reducers: {
        toggleGameOver: (state) => {
            state.gameOver = !state.gameOver
        },
        addWrongWord: (state, action) => {
            state.wrongWords = [...state.wrongWords, action.payload]
        },
        addCorrectGuess: (state, action) => {
            state.correctGuesses = [...state.correctGuesses, action.payload]
        },
        addGuessedWord: (state, action) => {
            state.guessedWords = [...state.guessedWords, action.payload]
        },
        setAnswer: (state, action) => {
            state.answer = action.payload
        },
        incrementWinCounter: (state) => {
            state.winCounter = state.winCounter + 1
        },
        clearAllGuesses: (state) => {
            state.guessedWords = [];
            state.correctGuesses = [];
            state.wrongWords = [];
        },
    },
})
 
export const {toggleGameOver, addWrongWord, addCorrectGuess, addGuessedWord, setAnswer, incrementWinCounter, clearAllGuesses} = hangmanSlice.actions; //update this everytime you add a reducer

export default hangmanSlice.reducer;