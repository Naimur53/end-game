import { Grid, Skeleton } from '@mui/material';
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
        <div className='mt-12'>
            <Grid container spacing={4}>
                {
                    !data.postLoad ? data.allRequestPost.map(post => <Grid item xs={12} md={4} key={post._id}>
                        <PostCard info={post} admin></PostCard>
                    </Grid>) : [...Array(10).keys()].map(num => <Grid
                        item xs={12} md={3} key={num}
                    >
                        <div className=''>
                            <Skeleton variant="rectangular"
                                height={260} />
                            <Skeleton className='mt-2' variant="rectangular"
                                height={23} />
                            <Skeleton className='mt-3' variant="rectangular"
                                width={140}
                                height={23} />
                        </div>
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default ManageAllRequest;