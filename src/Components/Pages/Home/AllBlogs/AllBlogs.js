import { Container, Grid, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, resetBlogs, selectData } from '../../../../data/dataSlice';
import PostCard from '../../../SmallComponents/PostCard/PostCard';

const AllBlogs = props => {
    const [page, setPage] = useState(0);
    const data = useSelector(selectData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetBlogs())
        if (props.allBlog) {
            dispatch(getBlogs({}))
        }
    }, [])
    useEffect(() => {
        if (!props.allBlog) {
            dispatch(getBlogs({ size: 10, page }))
        }
    }, [page])
    return (
        <div>
            <Grid container spacing={2}>
                {
                    !data.postLoad ? data.blogs.map(post => <Grid item xs={12} md={3} key={post._id}>
                        <PostCard info={post} ></PostCard>
                    </Grid>) :
                        [...Array(10).keys()].map(num => <Grid
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
            {
                !props.allBlog && <div className=" inline-block py-4 text-xl">
                    {
                        [...Array(data.pageCount).keys()].map(number => <button
                            key={number}
                            onClick={() => setPage(number)}
                            className={page === number ? 'w-10 h-10 bg-yellow-200 rounded-full' : 'w-10 h-10 rounded-full'}
                        >{number + 1}</button>)
                    }
                </div>
            }
        </div >
    );
};

export default AllBlogs;