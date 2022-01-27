import { Container } from '@mui/material';
import React from 'react';
import AllBlogs from '../Home/AllBlogs/AllBlogs';
import Footer from '../Home/Footer/Fotter';

const BlogPage = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url('https://i.ibb.co/Zhpq0cv/pngtree-summer-summer-tour-fresh-travel-banner-beach-background-image-8747.jpg' )` }} className='h-96 bg-center bg-cover'>
            </div>
            <Container className='mt-5'>
                <AllBlogs allBlog></AllBlogs>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;