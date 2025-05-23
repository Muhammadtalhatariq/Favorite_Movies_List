import React, { useState } from 'react'
import Title from './components/Title'
import AddMovie from './components/AddMovie'
import { Form, Formik } from 'formik';
import AllMovies from './components/AllMovies';
import { addmovie, editmovie } from './features/movies/MovieSlice';
import { ToastContainer, toast } from 'react-toastify';
import { validation } from "../src/validation"
import { useDispatch } from 'react-redux'

const App = () => {

  const [editingMovie, setEditingMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const updatetoast = () => toast("Movie updated successfully");
  const addtoast = () => toast("Movie added successfully");
  const dispatch = useDispatch()

  const handleSubmit = (values,actions) => {

    const { movie, urlmovie } = values;

    if (isEditing) {
      dispatch(editmovie({
        id: editingMovie.id,
        movieName: movie,
        urlmovie: urlmovie
      }));
      updatetoast()
    } else {
      dispatch(addmovie({ movie, urlmovie }));
      addtoast();
      actions.resetForm()
    }
    setIsEditing(false);
    setEditingMovie(null);
  };
  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingMovie(null);
  };

  return (
    <>
        <Title />
        <Formik
          initialValues={{
            movie: editingMovie?.movieName || '',
            urlmovie: editingMovie?.urlmovie || ""
          }}
          validationSchema={validation}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit} >
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
                <div className='flex gap-4'>
                  <button className='md:px-4 w-40 md:w-[300px] py-1 px-1 bg-green-100 hover:text-white hover:bg-green-400 rounded-lg font-semibold duration-1000 cursor-pointer' type='submit'>{isEditing ? 'Update Movie' : 'Add Movie'}</button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className='md:px-4 w-40 md:w-[300px] py-1 px-1 bg-green-100 hover:text-white hover:bg-green-400 rounded-lg font-semibold duration-1000 cursor-pointer'
                    >
                      Cancel
                    </button>
                  )}.
                </div>
                <ToastContainer />
              </div>
            </Form>
          )}
        </Formik>
        <AllMovies onEdit={handleEdit} />
    </>
  )
}

export default App
