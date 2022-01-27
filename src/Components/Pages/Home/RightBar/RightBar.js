import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cheapTopRate, selectData } from '../../../../data/dataSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay, EffectFade
} from 'swiper';

import 'aos/dist/aos.css';
import CheapTopRateCard from '../../../SmallComponents/CheapTopRateCard/CheapTopRateCard';
import { Grid, Skeleton } from '@mui/material';
import AdminRecentCard from '../../../SmallComponents/AdminRecentCard/AdminRecentCard';

SwiperCore.use([EffectFade,]);
const RightBar = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData);
    useEffect(() => {
        dispatch(cheapTopRate({}));
    }, [])


    return (
        <div>
            <h2 className='text-xl py-3 bg-black text-white mb-4 px-3 font-osw'>Most Cheap and Top Rate Spot</h2>
            <div>
                <Swiper
                    className='h-full'
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    slidesPerView={1}
                >
                    {
                        !data.sideBarLoad ? data.cheapTopRate.map(blog => <SwiperSlide key={blog._id}><CheapTopRateCard info={blog}></CheapTopRateCard></SwiperSlide>) :
                            [...Array(10).keys()].map(num => <SwiperSlide key={num}>
                                <div className=''>
                                    <Skeleton variant="rectangular"
                                        height={260} />
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <h2 className='text-xl py-3 bg-black text-white mb-4 px-3 font-osw mt-4'>Admin Recent Blog</h2>
            <div>
                <Swiper
                    className='h-full'
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": false
                    }}
                    slidesPerView={1}
                >
                    {
                        !data.sideBarLoad ? data.adminLastBlog.map(blog => <SwiperSlide key={blog._id}><AdminRecentCard info={blog}></AdminRecentCard></SwiperSlide>) :
                            [...Array(5).keys()].map(num => <SwiperSlide key={num}>
                                <div className=''>
                                    <Skeleton variant="rectangular"
                                        height={130} />
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div >
        </div >
    );
};

export default RightBar;