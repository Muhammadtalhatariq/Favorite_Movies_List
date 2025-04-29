import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { favoritemovie, removemovie, addFavorite, removeFavorite} from '../features/movies/MovieSlice';
import TotalMovies from './TotalMovies';
import { FaHeart, FaRegHeart, FaRegEdit }  from 'react-icons/fa';

const AllMovies = ({onEdit}) => {

    const { movies, showOnlyFavorites } = useSelector(state => state.movies);
    const dispatch = useDispatch()
  
    const handleToggleFavorite = (movie) => {
        dispatch(favoritemovie(movie));
        if (!movie.isFavorite) {
            dispatch(addFavorite(movie));
        } else {
            dispatch(removeFavorite(movie.id));
        }
    };

    const filteredMovies = showOnlyFavorites
        ? movies.filter(movie => movie.isFavorite)
        : movies;

    if (filteredMovies.length === 0) {
        return (
            <>
                <TotalMovies />
                <div className='flex flex-col items-center justify-center gap-2 my-4 h-80'>
                    <img src="/empty.png" alt="" />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='flex flex-col items-center justify-center gap-2 my-4'>
                    <div>
                        <TotalMovies />
                    </div>
                    <div className='w-full flex justify-center items-center flex-wrap gap-2 md:gap-4 py-8'>
                        {filteredMovies.map((movie) => (
                            <div key={movie.id} className=' md:w-98 w-80 h-80  rounded-lg overflow-hidden'>
                                <div className='w-full h-68 relative'>
                                    <div className='absolute flex gap-4 md:left-32 left-22 top-40'>
                                        <div className='p-2 hover:bg-neutral-300 duration-700 border border-white overflow-hidden rounded-full cursor-pointer'>
                                            <button
                                                className='flex items-center justify-center cursor-pointer'
                                                onClick={() => handleToggleFavorite(movie)}>
                                                {movie.isFavorite ? (
                                                    <FaHeart size={20} color="red" />
                                                ) : (
                                                    <FaRegHeart size={20} color="white" />
                                                )}
                                            </button>
                                        </div>
                                        <div className='p-2 hover:bg-neutral-300 duration-700 border border-white  rounded-full cursor-pointer'>
                                            <MdOutlineDelete
                                                onClick={() => dispatch(removemovie(movie.id))}
                                                className='text-white' size={20} />
                                        </div>
                                        <div className='p-2 hover:bg-neutral-300 duration-700 border border-white  rounded-full cursor-pointer'>
                                            <FaRegEdit
                                                onClick={() => onEdit(movie)}
                                                className='text-white' size={20} />
                                        </div>
                                    
                                    </div>
                                    <img className='bg-contain h-60 w-full' src={movie.urlmovie} alt="movie image" />
                                    <h1 className='font-semibold text-neutral-500 hover:text-white bg-green-100 hover:bg-green-400 text-xl p-2 text-center duration-1000'>{movie.movieName}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default AllMovies
