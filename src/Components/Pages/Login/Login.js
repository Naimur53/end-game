import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';
import { Button } from '@mui/material';
import { selectData } from '../../../data/dataSlice';
import './Login.css';
const Login = () => {
    const { googleSignIn, logInWithEmail } = useFirebase();
    const location = useLocation()
    const navigate = useNavigate()
    const data = useSelector(selectData);
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (data?.user?.email) {
        navigate('/');
    }
    const onSubmit = data => {
        logInWithEmail(data);
    }
    return (
        <div className='h-screen  flex items-center justify-center flex-col '>
            <div className='w-11/12	shadow-md md:w-1/3 md:h-3/5 px-3 py-8 rounded-lg'>
                <h2 className='font-bold text-xl mb-2'>Login From</h2>
                <hr className='w-10   border-t-4 rounded-full' />
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full'
                        placeholder='Email'
                        label="Email" variant="standard" type='email' {...register("email", { required: true })} />
                    {
                        errors.email && <div>This filed is required</div>
                    }
                    <input className='placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full' placeholder='Password' label="Password" name='password' variant="standard" {...register("password", { required: true, minLength: 6 })} />
                    {
                        errors.password && <div>password must be 6 length</div>
                    }
                    <div>
                        <input className='my-3 text-lg py-2 font-bold px-6 border border-gary-300 text-black rounded-full cursor-pointer transition-all hover:shadow-md' type="submit" value='Login' />

                    </div>

                </form>
                <button onClick={() => googleSignIn(location, navigate)} type="button" className="login-with-google-btn rounded-full mr-2 mb-4" >
                    Sign in with Google
                </button>
                <Button sx={{ px: 3, py: 1.3, color: 'gray', borderRadius: 30, border: '1px solid rgba(0, 0, 0,.3)' }} to='/signUp' component={NavLink} >Dont have Account? </Button>
            </div>
        </div>
    );
};

export default Login;