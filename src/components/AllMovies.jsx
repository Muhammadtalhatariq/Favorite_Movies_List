import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { favoritemovie, removemovie } from '../features/movies/MovieSlice';
import TotalMovies from './TotalMovies';
import { toast } from 'react-toastify';

const AllMovies = () => {
    const onNotify = () => toast("Delete Movie");
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    console.log(movies);
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4 my-8 mx-4'>
                <div>
                    <TotalMovies />
                </div>
                <div className='w-full bg-gray-100  flex justify-center items-center flex-wrap  gap-4 py-8'>
                    {movies.map((movie) => (
                        <div key={movie.id} className=' size-72 bg-green-100 rounded-xl overflow-hidden'>
                            <div className='w-full h-68 relative'>
                                <div className='absolute flex gap-4 left-25 top-40'>
                                    <div className='p-2 hover:bg-neutral-300 border border-white rounded-full'>
                                        <CiHeart className='text-white' size={25} />
                                    </div>
                                    <div className='p-2 hover:bg-neutral-300 border border-white  rounded-full'>
                                        <MdOutlineDelete
                                            onClick={() => dispatch(removemovie(movie.id))}
                                            className='text-white' size={25} />
                                    </div>
                                </div>
                                <img className='bg-contain h-60 w-full' src={movie.urlmovie} alt="movie image" />
                                <h1 className='font-semibold text-neutral-500 text-xl p-2 text-center'>{movie.movieName}</h1>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default AllMovies
