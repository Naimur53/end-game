import { CircularProgress, Container, MenuItem, Rating, Select } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { requestForPost, selectData } from '../../../data/dataSlice';

const AddExperience = () => {
    const { user, isAdmin } = useSelector(selectData);
    const dispatch = useDispatch();
    const [imgLoading, setImgLoading] = useState(false)
    const [category, setCategory] = useState('Group Tour')
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const onSubmit = data => {
        const date = new Date();
        data.post_date = date.toLocaleDateString();

        data.category = category;
        data.photoURL = user?.photoURL
        data.admin = isAdmin;
        if (isAdmin) {
            data.status = 'approve';
        } else {
            data.status = 'pending';
        }
        if (data.travelImg.length === 0) {
            return alert("chose img to publish")
        }
        if (data.travelImgFile.length) {

        }
        delete data.travelImgFile

        console.log(data, 'data');
        dispatch(requestForPost(data))
    }
    useEffect(() => {
        const file = watch('travelImgFile');
        if (file?.length) {
            let body = new FormData()
            body.set('key', process.env.REACT_APP_IMAGEBB_API)
            body.append('image', file[0])
            setImgLoading(true);
            axios({
                method: 'post',
                url: 'https://api.imgbb.com/1/upload',
                data: body
            }).then(res => {
                console.log(res.data.data);
                setValue('travelImg', res.data?.data?.url)
            }).finally(() => setImgLoading(false))
        }
        else {
        }

    }, [watch('travelImgFile')]);
    return (
        <div>
            <Container>
                {
                    user?.email && <form className="flex flex-col   w-full px-3 my-2 py-2 rounded-md " onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type='text'
                            className="placeholder-gray-100  w-full bg-transparent border-b py-2 border-red-100 px-2"
                            placeholder='Your Name'
                            defaultValue={user.displayName}
                            readOnly
                            {...register("user_name", { required: true })} />
                        <input
                            type='text'
                            className="placeholder-gray-100  w-full bg-transparent border-b py-2 border-red-100 px-2"
                            readOnly
                            placeholder='Email'
                            defaultValue={user.email}
                            {...register("user_email", { required: true })} />
                        <input
                            type='text'
                            className="  w-full bg-transparent border-b py-2 border-red-100 px-2"
                            placeholder='Title'
                            {...register("title", { required: true })} />
                        <Select
                            labelId="demo-simple-select-label"
                            className='mt-5'
                            id="demo-simple-select"
                            value={category}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="Backpacker">Backpacker</MenuItem>
                            <MenuItem value='Group Tour'>Group Tour</MenuItem>
                            <MenuItem value="Private Tour ">Private Tour</MenuItem>
                            <MenuItem value="Slow Tour ">Slow Tour</MenuItem>
                        </Select>
                        <label > Date you visite</label>
                        <input
                            type='date'
                            className="placeholder-gray-100  w-full bg-transparent border-b py-2 border-red-100 px-2"
                            {...register("date", { required: true })} />
                        <input
                            type='text'
                            className=" w-full bg-transparent border-b py-2 border-red-100 px-2"
                            placeholder='Spot Name'
                            {...register("spot_name", { required: true })} />
                        <input
                            type='address'
                            className=" w-full bg-transparent border-b py-2 border-red-100 px-2"
                            placeholder='location'
                            {...register("location", { required: true })} />
                        <input
                            type='number'
                            className="  w-full bg-transparent border-b py-2 border-red-100 px-2"
                            placeholder='total cost'
                            {...register("total_cost", { required: true })} />
                        <Rating
                            name="simple-controlled"
                            value={parseInt(watch('rating'))}
                            onChange={(event, newValue) => {
                                setValue('rating', newValue);
                            }}
                        />
                        <input id="travelPhoto" accept='image/*' {...register("travelImgFile")} className='hidden' type="file" />
                        <div className=''>
                            <label htmlFor="travelPhoto" className='border border-green-600 md:mb-4 mb-2 mr-2 md:mr-10 px-3 py-2 bg-gray-900 text-white  rounded-md flex items-center'> chose img</label>
                        </div>
                        <textarea
                            className="  w-full bg-transparent border-b py-2 border-red-100 px-2"
                            placeholder='Describe your experience'
                            {...register("experience", { required: true })}
                        ></textarea>
                        {
                            imgLoading ? <CircularProgress></CircularProgress> : <input className='p-3  bg-black text-white' type="submit" value="request for post" />
                        }
                    </form>
                }
            </Container>
        </div >
    );
};

export default AddExperience;