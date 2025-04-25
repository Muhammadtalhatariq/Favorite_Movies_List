import { configureStore } from '@reduxjs/toolkit'
import movieraducer from "../features/movies/MovieSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
}

const moviesReducer = combineReducers({
    movies: movieraducer,
});

const persistedReducer = persistReducer(persistConfig, moviesReducer);

export const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);
