import * as Yup from 'yup';

export const validation = Yup.object({
    movie: Yup.string()
        .matches(/^[^\s].*$/, 'Movie name cannot start with a space')
        .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, 'Plase enter one space between words')
        .required('Please enter your favorite movie name'),
    urlmovie: Yup.string()
        .required('Please enter your favorite movie url')
        .url('Must be a valid URL')
})