import { Button, CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Rating, Select } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { requestForPost, selectData } from '../../../data/dataSlice';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Footer from '../Home/Footer/Fotter';
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


        dispatch(requestForPost(data))
        reset();
        alert('Request Send')
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

                setValue('travelImg', res.data?.data?.url)
            }).finally(() => setImgLoading(false))
        }
        else {
        }

    }, [watch('travelImgFile')]);
    return (
        <div>
            <Container>
                <h2 className='mt-20 mb-5 text-center text-4xl font-osw'>Share Your Amazing Experience</h2>
                {
                    user?.email && <form className="flex flex-col   w-full px-3 mb-2 py-2 rounded-md " onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <input
                                    type='text'
                                    className="placeholder-gray-100  w-full bg-transparent border-b py-2 border-red-200 px-2"
                                    placeholder='Your Name'
                                    defaultValue={user.displayName}
                                    readOnly
                                    {...register("user_name", { required: true })} />
                            </Grid>
                            <Grid item xs={6}>
                                <input
                                    type='text'
                                    className="placeholder-gray-100  w-full bg-transparent border-b py-2 border-red-200 px-2"
                                    readOnly
                                    placeholder='Email'
                                    defaultValue={user.email}
                                    {...register("user_email", { required: true })} />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    type='text'
                                    className="placeholder-gray-500 placeholder:text-lg  w-full bg-transparent border-b py-2 border-red-200 px-2"
                                    placeholder='Give a title'
                                    {...register("title", { required: true })} />
                            </Grid>
                            <Grid item xs={6}>
                                <label htmlFor="demo-simple-select-label" className='block text-xl mb-2'> Category of Tour</label>
                                <Select
                                    labelId="demo-simple-select-label"
                                    className=''
                                    id="demo-simple-select"
                                    value={category}
                                    sx={{ color: 'black', width: '100%' }}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Backpacker">Backpacker</MenuItem>
                                    <MenuItem value='Group Tour'>Group Tour</MenuItem>
                                    <MenuItem value="Private Tour ">Private Tour</MenuItem>
                                    <MenuItem value="Slow Tour ">Slow Tour</MenuItem>
                                </Select>

                            </Grid>
                            <Grid item xs={6}>
                                <label className='block text-xl mb-2'> Date you visit</label>
                                <input
                                    type='date'
                                    className="placeholder-gray-100  w-full bg-transparent border-b py-3 border-red-200 px-2"
                                    {...register("date", { required: true })} />
                            </Grid>
                            <Grid item xs={6}>
                                <input
                                    type='text'
                                    className="placeholder-gray-500 placeholder:text-lg  w-full bg-transparent border-b py-2 border-red-200 px-2"
                                    placeholder='Spot Name'
                                    {...register("spot_name", { required: true })} />
                            </Grid>
                            <Grid item xs={6}>
                                <input
                                    type='number'
                                    className="placeholder-gray-500 placeholder:text-lg  w-full bg-transparent border-b py-2 border-red-200 px-2"
                                    placeholder='Total cost to visit'
                                    {...register("total_cost", { required: true })} />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    type='address'
                                    className="placeholder-gray-500 placeholder:text-lg w-full bg-transparent border-b py-2 border-red-200 px-2"
                                    placeholder='Location of spot '
                                    {...register("location", { required: true })} />
                            </Grid>
                            <Grid item xs={6}>
                                <div className='py-16 flex flex-col justify-center items-center shadow-lg'>
                                    <Rating
                                        name="simple-controlled"
                                        value={parseInt(watch('rating'))}
                                        onChange={(event, newValue) => {
                                            setValue('rating', newValue);
                                        }}
                                    />
                                    <h2 className='md:text-xl text-center'>Over All Experience</h2>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <input id="travelPhoto" accept='image/*' {...register("travelImgFile")} className='hidden' type="file" />

                                {
                                    watch("travelImg") ? <div style={{ backgroundImage: `url(${watch("travelImg")})` }} className='py-20 bg-center bg-no-repeat relative'>
                                        <label style={{ background: 'rgba(0,0,0,.3)' }} className='absolute flex-col text-white text-lg flex justify-center cursor-pointer items-center inset-0 ' htmlFor="travelPhoto"> <AddAPhotoIcon sx={{ color: 'white' }}></AddAPhotoIcon> Change Image</label>

                                    </div> : <label htmlFor="travelPhoto" className='py-16 shadow-lg cursor-pointer flex flex-col justify-center items-center'> <AddAPhotoIcon></AddAPhotoIcon>
                                        <h2 className='text-xl'>Chose travel image</h2>
                                    </label>
                                }

                            </Grid>
                            <Grid item xs={12}>
                                <textarea
                                    className="placeholder-gray-500 placeholder:text-lg rounded-md shadow  w-full bg-transparent border  py-2 border-red-200 px-2"
                                    placeholder='Describe your experience'
                                    rows={5}
                                    {...register("experience", { required: true })}
                                ></textarea>
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    imgLoading ? <button className='p-3  bg-gray-600 text-white w-full'>Loading Image...</button> : <input className='p-3  bg-black text-white w-full' type="submit" value={isAdmin ? 'Post' : "Request for post "} />
                                }
                            </Grid>
                        </Grid>
                    </form>
                }
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default AddExperience;