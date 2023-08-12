import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import photo from "../../public/photo.jpg";

const slideLeft = {
    hidden: {
        x: -1000,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.3
        }
    },
}

const slideRight = {
    hidden: {
        x: 1000,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.3
        }
    },
}


const Introduction = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            className='overflow-hidden py-12 my-12'
        >
            <div className='container mx-auto max-w-screen-xl'>
                <div className='flex gap-10'>
                    <motion.div variants={slideLeft} className='w-1/2 h-[80vh] flex items-center justify-center bg-blue'>
                        <Image className='w-full h-full object-cover shadow-[0px_0px_15px_0px_#3A396BFF]' src='/photo.jpg' alt='Моё прекрасное лицо' width={photo.width} height={photo.height}/>
                    </motion.div>
                    <motion.div variants={slideRight} className='w-1/2 h-[80vh] flex items-center justify-center'>
                        <h2 className='text-lightGray text-5xl leading-normal text-left'>
                            Привет! <br/> Меня зовут <b className='text-violet'>Дмитрий</b> и я волшебник, <br/> а именно - <b className='text-violet'>Frontend-разработчик</b>.
                        </h2>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Introduction;