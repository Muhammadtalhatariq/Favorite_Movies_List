import { createSlice, nanoid, createSelector } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const onNotify = () => toast("Delete Movie");

const initialState = {
  movies: [],
  showOnlyFavorites: false
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
        urlmovie: urlmovie,
        isFavorite: false,
      }
      state.movies.push(movieData)
      // console.log(movieData,"moviedata redux");
      console.log("state movies", state.movies);


    },


    removemovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
      onNotify()
    },
    favoritemovie: (state, action) => {
      const movie = state.movies.find(movie => movie.id === action.payload);
      console.log("movie favrt", movie);

      if (movie) movie.isFavorite = !movie.isFavorite;
    },
    toggleShowFavorites: (state) => {
      state.showOnlyFavorites = !state.showOnlyFavorites;
    }
  },

})

export const { addmovie, removemovie, favoritemovie, toggleShowFavorites } = MovieSlice.actions
export default MovieSlice.reducer
