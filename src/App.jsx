import React, { useEffect } from 'react'
import Title from './components/Title'
import AddMovie from './components/AddMovie'
import { Form, Formik } from 'formik';
import AllMovies from './components/AllMovies';
import { useDispatch } from 'react-redux';
import { addmovie } from './features/movies/MovieSlice';



const App = () => {

  const dispatch = useDispatch()
  return (
    <>
      <Title />
      <Formik
        initialValues={{
          movie: '',
        }}
        onSubmit={(values) => {
          dispatch(addmovie(values.movie))
          // console.log(values.movie);
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <div className='flex gap-4 items-center justify-center'>
              <AddMovie
                name="movie"
                type="text"
                placepolder="enter your favorite movie"
              />
              <button className='px-4 py-1 bg-red-400 rounded-xl' type='submit'>addtodo</button>
            </div>

          </Form>
        )}
      </Formik>

      <AllMovies />
    </>
  )
}

export default App
