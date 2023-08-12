'use client'
import React from 'react';
import {Pagination, EffectFade} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/globals.css';
import Image from "next/image";
import konsctruct from '../../public/Konstruct .jpg'
import innoma from '../../public/Innoma .jpg'
import ugmonk from '../../public/Ugmonk.jpg'
interface IProps {
    [index: number] : any
    paginationLabels: string[]
}
const Slider : React.FC<IProps> = (props: IProps) => {
    const pagination = {
        clickable: true,
        renderBullet: (index : number, className : string) => {
            return '<span class="' + className + '">' + (props.paginationLabels[index]) + '<b>' + (index + 1) + '</b>' + '</span>';
        },
    }
    return (
        <Swiper
            className='mySwiper shadow-[0px_0px_15px_0px_#3A396BFF]'
            modules={[Pagination, EffectFade]}
            slidesPerView={1}
            pagination={pagination}
            effect="fade"
            speed={500}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
        >
            <SwiperSlide className='bg-blue'>
                <Image className='w-full h-full object-cover object-top' src={konsctruct.src} alt='img' height={750} width={1280}/>
            </SwiperSlide>
            <SwiperSlide className='bg-blue'>
                <Image className='w-full h-full object-cover object-top' src={innoma.src} alt='img' height={750} width={1280}/>
            </SwiperSlide>
            <SwiperSlide className='bg-blue'>
                <Image className='w-full h-full object-cover object-top' src={ugmonk.src} alt='img' height={750} width={1280}/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;