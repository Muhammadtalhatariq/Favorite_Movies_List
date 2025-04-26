import React from 'react'
import { Input } from 'antd';
import { useField } from 'formik';

const AddMovie = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='w-64 md:w-[600px]'>
                    <Input {...field} {...props} />
                </div>
        
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-red-500 text-sm font-medium">{meta.error}</div>
            ) : null}
        </>
    )
}

export default AddMovie
