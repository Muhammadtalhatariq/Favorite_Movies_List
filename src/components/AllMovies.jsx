import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { favoritemovie, removemovie } from '../features/movies/MovieSlice';
import TotalMovies from './TotalMovies';
import { ToastContainer, toast } from 'react-toastify';

const AllMovies = () => {
    const notify = () => toast("Delete Movie");
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4 my-8'>
                <div>
                    <TotalMovies />
                </div>
                <ul className='bg-gray-200 md:w-[600px] w-72 p-3 '>
                    {movies.map((movie) => (

                        <li key={movie.id} className='flex items-center justify-between px-4 py-2 my-2 bg-green-100'>
                            <h2 className=' font-medium'>{movie.movieName}</h2>
                            <div className='flex gap-4'>
                                <CiHeart onClick={() => dispatch(favoritemovie(movie.id))} size={20} />

                               
                                    <MdOutlineDelete
                                    
                                        onClick={() => dispatch(removemovie(movie.id))}
                                        size={20} />
                                         <ToastContainer />
                             
                               
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default AllMovies
