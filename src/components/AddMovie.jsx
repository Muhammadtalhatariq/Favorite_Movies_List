import React from 'react'
import { Input } from 'antd';
import { useField } from 'formik';

const AddMovie = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className='flex items-center '>
                <div className='w-80 md:w-[600px] duration-1000'>
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
