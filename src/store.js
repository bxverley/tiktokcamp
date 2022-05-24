import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from './hangmanSlice'

export const store = configureStore({
    reducer: {
        hangman: hangmanReducer,
    },
})