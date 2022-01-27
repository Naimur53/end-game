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
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <AllBlogs></AllBlogs>
                    </Grid>
                    <Grid item xs={3}>
                        <RightBar></RightBar>
                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;