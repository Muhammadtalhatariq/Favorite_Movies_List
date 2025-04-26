import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteMovies: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favoriteMovies.some(movie => movie.id === action.payload.id)) {
        state.favoriteMovies.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        movie => movie.id !== action.payload
      );
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;