import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay,
} from 'swiper';

import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper styles 
import 'swiper/css';
import { Button, Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
AOS.init();
SwiperCore.use([Autoplay,]);
const Banner = () => {
    return (
        <div className='h-screen '>
            <Swiper
                className='h-full'
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                slidesPerView={1}
                onSlideChange={(e) => AOS.refresh(true)}
                onSwiper={(swiper) => console.log(swiper, 'se')}
            >
                <SwiperSlide className='h-full '>
                    {({ isActive }) => (
                        <div className=' bg-cover bg-center h-full bg-[url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)]'>
                            <div className='h-full flex justify-center' style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                                <Container className='h-full'>
                                    <Grid container spacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }} className='md:h-full sm:flex-col-reverse '>
                                        <Grid item xs={12} md={6} className='md:h-full flex justify-center items-center'>
                                            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        </Grid>
                                        <Grid item xs={12} md={6} className='md:h-full flex justify-center items-center'>
                                            <div className='mt-16 md:mt-0' >
                                                <div data-aos="fade-left"
                                                    data-aos-delay="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="500"
                                                    className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='text-5xl uppercase text-white font-osw mb-4'> Learn From other tourist than make plan</h2>
                                                </div>
                                                <div data-aos="fade-left"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="800"
                                                    data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='mb-5 font-os text-lg text-gray-50 '> Since time immemorial, humans and animals alike; have valued the importance of travel. </h2>
                                                </div>

                                                <div
                                                    data-aos="fade-left"
                                                    data-aos-delay="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="1000"
                                                    className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <NavLink className='title2 font-osw text-xl inline-block p-4 bg-green-900 transition-all hover:translate-x-4 text-white ' to="/addExperience" > Share your experience</NavLink>
                                                </div>
                                            </div>
                                        </Grid>


                                    </Grid>
                                </Container>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className='h-full '>
                    {({ isActive }) => (
                        <div className=' bg-cover bg-center h-full bg-[url(https://i.ibb.co/TWgw2K5/Family-with-two-little-daughters-travel-in-nature-making-selfie-smiling.jpg)]'>
                            <div className='h-full flex justify-center' style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                                <Container className='h-full'>
                                    <Grid container spacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }} className='md:h-full sm:flex-col-reverse '>
                                        <Grid item xs={12} md={6} className='md:h-full flex justify-center items-center'>
                                            <img src="https://i.ibb.co/TWgw2K5/Family-with-two-little-daughters-travel-in-nature-making-selfie-smiling.jpg" alt="" />
                                        </Grid>
                                        <Grid item xs={12} md={6} className='md:h-full flex justify-center items-center'>
                                            <div className='mt-16 md:mt-0' >
                                                <div data-aos="fade-left"
                                                    data-aos-delay="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="500"
                                                    className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='text-5xl uppercase text-white font-osw mb-4'> Believe you can and you’re halfway there.</h2>
                                                </div>
                                                <div data-aos="fade-left"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="800"
                                                    data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='mb-5 font-os text-lg text-gray-50 '> Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on. </h2>
                                                </div>

                                                <div
                                                    data-aos="fade-left"
                                                    data-aos-delay="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="1000"
                                                    className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <NavLink className='title2 font-osw text-xl inline-block p-4 bg-blue-900 transition-all hover:translate-x-4 text-white ' to="/addExperience" > Add your experience</NavLink>
                                                </div>
                                            </div>
                                        </Grid>


                                    </Grid>
                                </Container>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className='h-full '>
                    {({ isActive }) => (
                        <div className=' bg-cover bg-center h-full bg-[url(https://i.ibb.co/Nj7x90m/Young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel-wellbeing.jpg)]'>
                            <div className='h-full flex justify-center' style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                                <Container className='h-full'>
                                    <Grid container spacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }} className='md:h-full sm:flex-col-reverse '>
                                        <Grid item xs={12} md={6} className='md:h-full flex justify-center items-center'>
                                            <img src="https://i.ibb.co/Nj7x90m/Young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel-wellbeing.jpg" alt="" />
                                        </Grid>
                                        <Grid item xs={12} md={6} className='md:h-full flex justify-center items-center'>
                                            <div className='mt-16 md:mt-0' >
                                                <div data-aos="fade-left"
                                                    data-aos-delay="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="500"
                                                    className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='text-5xl uppercase text-white font-osw mb-4'>Spread love everywhere you go what you do</h2>
                                                </div>
                                                <div data-aos="fade-left"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="800"
                                                    data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='mb-5 font-os text-lg text-gray-50 '> Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair </h2>
                                                </div>

                                                <div
                                                    data-aos="fade-left"
                                                    data-aos-delay="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-duration="1000"
                                                    className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <NavLink className='title2 font-osw text-xl inline-block p-4 bg-yellow-700 transition-all hover:translate-x-4 text-white ' to="/addExperience" > Add your experience</NavLink>
                                                </div>
                                            </div>
                                        </Grid>


                                    </Grid>
                                </Container>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
                {/* <SwiperSlide className='h-full bg-green-40 0'>
                    {({ isActive }) => (
                        <div className=' bg-cover bg-right-center h-full bg-[url(https://i.ibb.co/TWgw2K5/Family-with-two-little-daughters-travel-in-nature-making-selfie-smiling.jpg)]'>
                            <div className='h-full flex justify-center' style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                                <Container>
                                    <Grid container spacing={2} className='h-full'>
                                        <Grid item xs={12} md={6} className='h-full flex justify-center items-center'>
                                            <img src="https://i.ibb.co/TWgw2K5/Family-with-two-little-daughters-travel-in-nature-making-selfie-smiling.jpg" alt="" />
                                        </Grid>
                                        <Grid item xs={12} md={6} className='h-full flex justify-center items-center'>
                                            <div  >
                                                <div data-aos="fade-down" data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='text-3xl mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.</h2>
                                                </div>
                                                <div data-aos="fade-down-right" data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde, error earum quo tenetur voluptate, dolorum vero qui rem ipsa beatae aperiam libero quaerat harum quidem fuga eos quis accusamus.</h2>
                                                </div>

                                                <div data-aos="flip-down" data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <Button variant='contained' color='error'> Add your experience</Button>
                                                </div>
                                            </div>
                                        </Grid>


                                    </Grid>
                                </Container>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className='h-full bg-green-40 0'>
                    {({ isActive }) => (
                        <div className=' bg-cover bg-center h-full bg-[url(https://i.ibb.co/Nj7x90m/Young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel-wellbeing.jpg)]'>
                            <div className='h-full flex justify-center' style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                                <Container>
                                    <Grid container spacing={2} className='h-full'>
                                        <Grid item xs={12} md={6} className='h-full flex justify-center items-center'>
                                            <img src="https://i.ibb.co/Nj7x90m/Young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel-wellbeing.jpg" alt="" />
                                        </Grid>
                                        <Grid item xs={12} md={6} className='h-full flex justify-center items-center'>
                                            <div  >
                                                <div data-aos="fade-down" data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='text-3xl mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.</h2>
                                                </div>
                                                <div data-aos="fade-down-right" data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <h2 className='mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde, error earum quo tenetur voluptate, dolorum vero qui rem ipsa beatae aperiam libero quaerat harum quidem fuga eos quis accusamus.</h2>
                                                </div>

                                                <div data-aos="flip-down" data-aos-delay="3000" className={isActive ? 'aos-init aos-animate' : 'aos-init'}>
                                                    <Button variant='contained' color='error'> Add your experience</Button>
                                                </div>
                                            </div>
                                        </Grid>


                                    </Grid>
                                </Container>
                            </div>
                        </div>
                    )}
                </SwiperSlide> */}


            </Swiper>
        </div >
    );
};

export default Banner;