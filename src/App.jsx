import React, { useEffect } from 'react'
import Title from './components/Title'
import AddMovie from './components/AddMovie'
import { Form, Formik } from 'formik';
import AllMovies from './components/AllMovies';
import { useDispatch } from 'react-redux';
import { addmovie } from './features/movies/MovieSlice';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const notify = () => toast("Add Movie");
  const dispatch = useDispatch()
  return (
    <>
      <Title />
      <Formik
        initialValues={{
          movie: '',
          urlmovie: ""
        }}
        onSubmit={(values) => {
          dispatch(addmovie(values.movie))
          // console.log({values});
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <div className='flex gap-4 items-center  flex-col md:flex-row justify-center ml-1 flex-wrap'>
              <div className='flex flex-col md:flex-row gap-4'>
               <div className='flex flex-col gap-2'>
               <label className='font-semibold ' htmlFor="movie">Movie Name:</label>      <AddMovie
                  name="movie"
                  type="text"
                  id="movie"
                  placepolder="Enter your favorite movie"
                />
               </div>
              <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor="movieurl">Movie Name:</label>
                <AddMovie
                  name="urlmovie"
                  id="movieurl"
                  placepolder="Enter movie url"
                />
              </div>
              </div>
              <div className='mt-7'>
              <button onClick={notify} className='md:px-4 py-1 px-1 bg-red-400 rounded-xl' type='submit'>Add Movie</button>
              </div>
              <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>

      <AllMovies />
    </>
  )
}

export default App
