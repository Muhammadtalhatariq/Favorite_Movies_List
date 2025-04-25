import React from 'react'
import { Input } from 'antd';
import { useField } from 'formik';

const AddMovie = ({ ...props }) => {
    const [field, meta] = useField(props)
    // console.log(field, meta);
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='w-64 md:w-96'>
                    <Input {...field} {...props} />
                </div>
            </div>
        </>
    )
}

export default AddMovie
