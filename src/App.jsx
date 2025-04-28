import React from 'react'
import Title from './components/Title'
import AddMovie from './components/AddMovie'
import { Form, Formik } from 'formik';
import AllMovies from './components/AllMovies';
import { useDispatch } from 'react-redux';
import { addmovie } from './features/movies/MovieSlice';
import { ToastContainer, toast } from 'react-toastify';
import { validation } from "../src/validation"

const App = () => {
  const notify = () => toast("Add Movie");
  const dispatch = useDispatch()
  return (
    <>
      <div >
        <Title />
        <Formik
          initialValues={{
            movie: '',
            urlmovie: ""
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            const { movie, urlmovie } = values
            dispatch(addmovie({ movie, urlmovie }))
            notify()
            // console.log("databform", { movie, urlmovie });
          }}

        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
              <div className='flex gap-4 items-center flex-col justify-center  flex-wrap '>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='font-semibold ' htmlFor="movie">Movie Name:</label>
                    <AddMovie
                      name="movie"
                      type="text"
                      id="movie"
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="movieurl">Movie Url:</label>
                    <AddMovie
                      name="urlmovie"
                      id="movieurl"
                    />
                  </div>
                </div>
                <div>
                  <button className='md:px-4 w-80 md:w-[600px]  py-1 px-1 bg-green-100 hover:text-white hover:bg-green-400 rounded-lg font-semibold duration-1000 cursor-pointer' type='submit'>Add Movie</button>
                </div>
                <ToastContainer />
              </div>
            </Form>
          )}
        </Formik>
        <AllMovies />
      </div>
    </>
  )
}

export default App
