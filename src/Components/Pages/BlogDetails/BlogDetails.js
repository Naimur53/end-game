import { Avatar, CircularProgress, Container, Grid, Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const BlogDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [detailsLoading, setDetailsLoading] = useState(true);
    useEffect(() => {
        setDetailsLoading(true)
        axios.get(`https://serene-temple-54072.herokuapp.com/details/${id}`)
            .then(res => {
                console.log(res.data);
                setDetails(res.data)
            }).finally(res => { setDetailsLoading(false) })
    }, [])
    const { date, experience, location, post_date, rating, status, total_cost, photoURL, title, category, travelImg, user_email, user_name, _id } = details;
    if (detailsLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <CircularProgress></CircularProgress>
            </div>
        )
    }
    return (
        <div>
            <div style={{ backgroundImage: `url(${travelImg})` }} className='h-96 bg-center bg-cover relative'>
                <div className='absolute top-0 bg-white mt-4 ml-4 px-3 py-2 rounded-lg'>{category}</div>
            </div>
            <Container >

                <Grid container spacing={4}>
                    <Grid item md={8}>
                        <div>
                            <small className=' pt-2 text-gray-600 flex items-center'><EventAvailableIcon fontSize='small'></EventAvailableIcon><span className='ml-2 italic  text-[16px]'>{date}</span></small>
                            <h2 className='text-4xl font-osw py-5'>{title}</h2>
                            <p className='text-lg'>
                                {experience}
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className='md:mt-10 shadow-lg p-4 rounded-lg'>
                            <h2 className='text-lg'>Location: {location}</h2>
                        </div>
                        <div className='mt-5 shadow-lg p-4 rounded-lg'>
                            <h2 className='text-lg pt-4'>Total Cost: ${total_cost}</h2>
                            <div className='text-center mt-4'>
                                <h3>OverAll Experience</h3>
                                <Rating value={rating} readOnly></Rating>

                            </div>
                        </div>
                        <div className='mt-5 shadow-lg p-4 rounded-lg'>

                            <div className='flex flex-col justify-center items-center mt-4'>
                                <Avatar alt='userimg' src={photoURL}></Avatar>
                                <div className='text-center'>
                                    <h3>{user_name}</h3>
                                    <h3>{user_email}</h3>
                                    <h3>post on {post_date}</h3>
                                </div>

                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default BlogDetails;