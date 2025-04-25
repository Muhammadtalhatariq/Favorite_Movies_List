import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  movies: [
    {
      id: 1,
      movieName: "movie",
    }
  ],
  isFavorite: [
    {
      value: null
    }
  ]
}

export const MovieSlice = createSlice({
  name: 'MovieList',
  initialState,
  reducers: {
    addmovie: (state, action) => {
      const movie = {
        id: nanoid(),
        movieName: action.payload,
      }
      state.movies.push(movie)
      // alert("add movie")

    },
    removemovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
      // alert("delete movie")
    },
    favoritemovie: (state, action) => {
      const favrt = state.movies.filter((movie) => movie.id == action.payload)
      state.isFavorite.push(favrt)
      // alert("favorite movie")
    },

  },
})


export const { addmovie, removemovie, favoritemovie } = MovieSlice.actions

export default MovieSlice.reducer