import React from 'react'
import { useSelector } from 'react-redux'
const TotalMovies = () => {
    const favorite = useSelector(state => state.movies.isFavorite)
    const movies = useSelector(state => state.movies)

    // console.log(favorite);

    return (
        <>
            <div className='flex items-center-center gap-4'>
                <div className='bg-green-100 p-2'>
                    <span className='font-semibold'>Total Movies :</span> <span className='text-red-500 font-medium'> {movies.length}</span>
                </div>
                <div className='bg-green-200 p-2'>
                    <span className='font-semibold'>Total Favorite:</span> <span className='text-red-500 font-medium'> {favorite.length}</span>
                </div>
            </div>
        </>
    )
}

export default TotalMovies
