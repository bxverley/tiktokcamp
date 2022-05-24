import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wrongWords: ["A", "B"],
    guessedWords: ["A"],
    win: false,
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
    },
})

export const {toggleWin, addWrongWord} = hangmanSlice.actions;

export default hangmanSlice.reducer;