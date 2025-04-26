import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowFavorites } from '../features/movies/MovieSlice'

import { addFavorite, removeFavorite } from "../features/movies/FavoriteSlice"


const TotalMovies = () => {
    const { showOnlyFavorites } = useSelector(state => state.movies);
    const movies = useSelector(state => state.movies.movies)

    const dispatch = useDispatch()
    const handleToggleFavorite = (movie) => {
        dispatch(toggleFavorite(movie.id));
        if (!movie.isFavorite) {
            dispatch(addFavorite(movie));
        } else {
            dispatch(removeFavorite(movie.id));
        }
    };


    return (
        <>
            <div className='flex items-center-center gap-4'>
                <div className='bg-green-100 p-2'>
                    <span className='font-semibold'>Total Movies :</span> <span className='text-red-500 font-medium'> {movies.length}</span>
                </div>
                <div className='bg-green-100 p-2'>
                    <span className='font-semibold'>Total Favorite:</span> <span className='text-red-500 font-medium'></span>
                </div>

                <button
                    className='bg-green-100 hover:bg-green-400 font-semibold duration-500 cursor-pointer p-2 hover:text-white'
                    onClick={() => dispatch(toggleShowFavorites())}>
                    {showOnlyFavorites ? "Show all" : "Filter"}
                </button>

            </div>

        </>
    )
}

export default TotalMovies
