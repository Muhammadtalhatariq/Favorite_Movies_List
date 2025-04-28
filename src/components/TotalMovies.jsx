import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowFavorites } from '../features/movies/MovieSlice'

const TotalMovies = () => {
    const { showOnlyFavorites, movies } = useSelector(state => state.movies);
    const { favoriteMovies } = useSelector(state => state.favorites);
    const dispatch = useDispatch()

    return (
        <>
            <div className='flex justify-center gap-4 flex-wrap'>
                <div className='bg-green-100 p-2' >
                    <span className='font-semibold '>Total Movies : </span> <span className='text-red-500 font-medium '> {movies.length}</span>
                </div>
                <div className='bg-green-100 p-2'>
                    <span className='font-semibold '>Favorites Movies : </span> <span className='text-red-500 font-medium'>{favoriteMovies.length}</span>
                </div>
                <button
                    className='bg-green-100 hover:bg-green-400 font-semibold duration-500 cursor-pointer p-2 hover:text-white'
                    onClick={() => dispatch(toggleShowFavorites())}>
                    {showOnlyFavorites ? "Show all Movies" : "Favorites Movies"}
                </button>

            </div>

        </>
    )
}

export default TotalMovies
