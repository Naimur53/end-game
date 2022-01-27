import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { makeAdmin } from '../../../../data/dataSlice';

const AddAdmin = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(makeAdmin(data))
        reset();

    }
    return (
        <div className='mt-10 flex h-full justify-center items-center'>
            <div className=''>
                <h2 className='text-2xl py-4'>Make a user to admin with email </h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input placeholder='Enter email'
                        type="email"
                        className=" shadow w-full bg-transparent border-b py-2 border-red-100 px-2"
                        {...register("email", { required: true })} />
                    <input className='mt-4 shadow w-full bg-transparent border-b py-2 border-red-100 cursor-pointer' type="submit" value={'Make Admin'} />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;