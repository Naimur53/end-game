import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllRequestPost, selectData } from '../../../../data/dataSlice';
import PostCard from '../../../SmallComponents/PostCard/PostCard';

const ManageAllRequest = () => {
    const data = useSelector(selectData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllRequestPost());
    }, [])
    console.log(data.allRequestPost);
    return (
        <div>
            <Grid container spacing={4}>
                {
                    data.allRequestPost.map(post => <Grid item xs={12} md={4} key={post._id}>
                        <PostCard info={post} admin></PostCard>

                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default ManageAllRequest;