import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApprovePost, selectData } from '../../../../data/dataSlice';
import PostCard from '../../../SmallComponents/PostCard/PostCard';

const ManageAllPost = () => {

    const data = useSelector(selectData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllApprovePost());
    }, [])
    console.log(data.allApprovePost);
    return (
        <div>
            <Grid container spacing={4}>
                {
                    data.allApprovePost.map(post => <Grid item xs={12} md={4} key={post._id}>
                        <PostCard info={post} admin></PostCard>

                    </Grid>)
                }
            </Grid>

        </div>
    );
};

export default ManageAllPost;