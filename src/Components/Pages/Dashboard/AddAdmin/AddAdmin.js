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
    }
    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input placeholder='Enter email'
                        type="email"
                        className="  w-full bg-transparent border-b py-2 border-red-100 px-2"
                        {...register("email", { required: true })} />
                    <input type="submit" value={'Make Admin'} />
                </form>
            </Container>
        </div>
    );
};

export default AddAdmin;