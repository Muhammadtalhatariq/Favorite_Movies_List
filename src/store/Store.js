import { configureStore } from '@reduxjs/toolkit'
import movieraducer from "../features/movies/MovieSlice"
export const store = configureStore({
    reducer: movieraducer

})