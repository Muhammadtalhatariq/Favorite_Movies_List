import { configureStore } from '@reduxjs/toolkit'
import MovieSlice from '../features/movies/MovieSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'movies',
    storage,
}

const moviesReducer = combineReducers({
    movies: MovieSlice,
});

const persistedReducer = persistReducer(persistConfig, moviesReducer);

export const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);
