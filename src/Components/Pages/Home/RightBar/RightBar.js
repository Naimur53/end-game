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
import { Grid } from '@mui/material';
import AdminRecentCard from '../../../SmallComponents/AdminRecentCard/AdminRecentCard';

SwiperCore.use([EffectFade,]);
const RightBar = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData);
    useEffect(() => {
        dispatch(cheapTopRate({}));
    }, [])
    console.log(data.cheapTopRate);

    return (
        <div>
            <h2 className='text-xl py-3 font-osw'>Cheap and Top Rate Spot</h2>
            <div>
                <Swiper
                    className='h-full'
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper, 'se')}
                >
                    {
                        data.cheapTopRate.map(blog => <SwiperSlide key={blog._id}><CheapTopRateCard info={blog}></CheapTopRateCard></SwiperSlide>)
                    }
                </Swiper>
            </div>
            <h2 className='text-xl py-3 font-osw'>Admin Recent Blog</h2>
            <div>
                <Swiper
                    className='h-full'
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": false
                    }}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper, 'se')}
                >
                    {
                        data.adminLastBlog.map(blog => <SwiperSlide key={blog._id}><AdminRecentCard info={blog}></AdminRecentCard></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default RightBar;