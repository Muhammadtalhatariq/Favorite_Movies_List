import { createSlice, nanoid } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const onNotify = () => toast("Delete Movie");

const initialState = {
  movies: [],
  isFavorite: []
}

export const MovieSlice = createSlice({
  name: 'MovieList',
  initialState,
  reducers: {
    addmovie: (state, action) => {
      const { movie, urlmovie } = action.payload;
      const movieData = {
        id: nanoid(),
        movieName: movie,
        urlmovie: urlmovie
      }
      state.movies.push(movieData)
      console.log(movieData,"moviedata redux");

    },
    removemovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
      onNotify()
    },
    favoritemovie: (state, action) => {
      const favrt = state.movies.filter((movie) => movie.id == action.payload)
      state.isFavorite.push(favrt)
      const favorite = state.movies.isFavorite
      // console.log(favorite);
    }

  },

})


export const { addmovie, removemovie, favoritemovie } = MovieSlice.actions

export default MovieSlice.reducer