import React from 'react';
import Slider from "@/components/Slider";
import {motion} from "framer-motion";
import Link from "next/link";

const labels = ['Konstruct', 'Innoma', 'Ugmonk']

const Portfolio = () => {
    return (
        <motion.section className='py-12'>
            <div className='container mx-auto max-w-screen-xl'>
                <h2 className='text-lightGray text-5xl leading-normal text-center mb-6'>Мои недавние работы</h2>
                <Slider paginationLabels={labels}/>
                <Link href='/portfolio' className='text-lightGray text-center bg-blue p-6 mt-6 block shadow-[0px_0px_15px_0px_#3A396BFF]'>Больше работ</Link>
            </div>
        </motion.section>
    );
};

export default Portfolio;