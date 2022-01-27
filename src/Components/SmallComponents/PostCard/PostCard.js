import { Avatar, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, updateStatus } from '../../../data/dataSlice';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import './PostCard.css'
import { NavLink } from 'react-router-dom';
const PostCard = props => {
    const dispatch = useDispatch();
    const { date, experience, location, post_date, rating, status, total_cost, PhotoURL, title, category, travelImg, user_email, user_name, _id } = props?.info;

    const handleDelete = () => {
        console.log('deleting');
        dispatch(deletePost({ _id }));
    }
    const handleUpdate = () => {
        console.log('deleting');
        dispatch(updateStatus({ _id }));
    }

    return (
        <div data-aos="zoom-out-right">
            <div className='flex flex-col'>
                <div className='relative'>
                    <img className='w-100' src={travelImg} alt="" />
                    <div className='absolute bg-black top-0 px-3 py-1 rounded-lg ml-2 mt-4'>
                        <h2 className='text-white py-0'>{category}</h2>
                    </div>
                </div>
                <div>
                    <small className=' pt-2 text-gray-600 flex items-center'><EventAvailableIcon fontSize='small'></EventAvailableIcon><span className='ml-2 italic  text-[16px]'>{date}</span></small>

                    <NavLink to={`/details/${_id}`} className='uppercase cursor-pointer title text-2xl font-osw font-semibold'>{title}</NavLink>
                </div>
            </div>
            {
                props.admin && <h2>status:{status}</h2>
            }
            {
                props.admin &&
                <Button onClick={handleDelete}>Delete</Button>
            }
            {
                status === "pending" && <Button onClick={handleUpdate}>approve</Button>
            }
        </div>
    );
};

export default PostCard;