import { Grid, Rating, Tooltip } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminRecentCard = props => {
    const { date, experience, location, post_date, rating, status, total_cost, PhotoURL, title, category, travelImg, user_email, user_name, _id } = props?.info;
    return (
        <NavLink to={`/details/${_id}`} className=' w-full block'>
            <Tooltip title='See Details'>
                <Grid container spacing={2}>
                    <Grid item xs={8} >
                        <div className='h-full flex flex-col items-center justify-center'>
                            <h3 className='uppercase '>{title.slice(0, 20)}</h3>
                            <p>{experience.slice(0, 10)}...</p>
                            <Rating
                                value={rating}
                                readOnly
                            ></Rating>
                        </div>
                    </Grid>
                    <Grid item xs={4} >
                        <img src={travelImg} alt="" />
                    </Grid>
                </Grid>
            </Tooltip>
        </NavLink>
    );
};

export default AdminRecentCard;