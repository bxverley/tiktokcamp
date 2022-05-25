import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wrongWords: [],
    guessedWords: [],
    win: false,
    answer: "",
}

export const hangmanSlice = createSlice ({
    name: 'hangman',
    initialState,
    reducers: {
        toggleWin: (state) => {
            state.win = !state.win
        },
        addWrongWord: (state, action) => {
            state.wrongWords = [...state.wrongWords, action.payload]
        },
        addGuessedWord: (state, action) => {
            state.guessedWords = [...state.guessedWords, action.payload]
        },
        setAnswer: (state, action) => {
            state.answer = action.payload
        },
    },
})
 
export const {toggleWin, addWrongWord, addGuessedWord, setAnswer} = hangmanSlice.actions; //update this everytime you add a reducer

export default hangmanSlice.reducer;