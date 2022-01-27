import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, resetBlogs, selectData } from '../../../../data/dataSlice';
import PostCard from '../../../SmallComponents/PostCard/PostCard';

const AllBlogs = props => {
    const [page, setPage] = useState(0);
    const data = useSelector(selectData)
    const dispatch = useDispatch();
    console.log(data.blogs);
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
            <Grid container spacing={1}>
                {
                    data.blogs.map(post => <Grid item xs={12} md={3} key={post._id}>
                        <PostCard info={post} ></PostCard>

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