import React from 'react';
import { Rating } from '@mui/material'
import { NavLink } from 'react-router-dom';
const CheapTopRateCard = props => {
    const { date, experience, location, post_date, rating, status, total_cost, photoURL, title, category, travelImg, user_email, user_name, _id } = props?.info;
    return (
        <div style={{ backgroundImage: `url(${travelImg})` }} className='h-80 bg-center bg-cover'>
            <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} className='h-full text-white flex flex-col justify-center items-center'>
                <NavLink to={`/details/${_id}`} className='text-2xl font-osw title'>{title}</NavLink>
                <Rating
                    value={rating}
                    readOnly
                >
                </Rating>
                <h4 className='text-xl font-osw'>${total_cost}</h4>

            </div>

        </div>
    );
};

export default CheapTopRateCard;