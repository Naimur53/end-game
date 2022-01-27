import { Container, Grid } from '@mui/material';
import React from 'react';
import AllBlogs from '../AllBlogs/AllBlogs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Fotter';
import RightBar from '../RightBar/RightBar';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Container maxWidth='xl'  >
                <div className='text-center py-5'>
                    <h2 className='text-5xl py-5 font-osw'>Watch All Tourist Blog</h2>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <AllBlogs></AllBlogs>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <RightBar></RightBar>
                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;