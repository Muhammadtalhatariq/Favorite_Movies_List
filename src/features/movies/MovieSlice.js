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
    },
    removemovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
      onNotify()
    },
    favoritemovie: (state, action) => {
      const movie = state.movies.find(movie => movie.id === action.payload.id);
      if (movie) movie.isFavorite = !movie.isFavorite;

    },
    toggleShowFavorites: (state) => {
      state.showOnlyFavorites = !state.showOnlyFavorites;
    },
    addFavorite: (state, action) => {
      if (!state.movies.find(movie => movie.id === action.payload.id)) {
        state.movies.isFavorite.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.Favorites = state.movies.filter(
        movie => movie.id !== action.payload
      );
    },
    editmovie: (state, action) => {
      const { id, movieName, urlmovie } = action.payload;
      const movieToEdit = state.movies.find(movie => movie.id === id);
      if (movieToEdit) {
        movieToEdit.movieName = movieName;
        movieToEdit.urlmovie = urlmovie;
      }
    },
  },
})

export const { addmovie, removemovie, favoritemovie, toggleShowFavorites, addFavorite, removeFavorite, editmovie } = MovieSlice.actions
export default MovieSlice.reducer
