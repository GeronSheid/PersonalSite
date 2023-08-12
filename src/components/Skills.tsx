import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import image from '../../public/html.svg'
const skillsData = [
    {title: 'JS', src: 'js.svg'},
    {title: 'TS', src: 'typeScript.svg'},
    {title: 'React', src: 'react.svg'},
    {title: 'NextJs', src: 'nextjs.svg'},
    {title: 'Express', src: 'express.svg'},
    {title: 'Sass', src: 'sass.svg'}
]

const itemsAnimation = {
    hidden: {
        opacity: 0,
        scale: 0.1
    },
    visible: (custom : number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: custom * 0.3,
            duration: 0.2
        }
    })
}

const slideLeft = {
    hidden: {
        x: -1000,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.3
        }
    },
}

const Skills = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            className='py-12'
        >
            <div className='container mx-auto max-w-screen-xl  flex items-center'>
                <motion.h2
                    variants={slideLeft}
                    className='text-lightGray text-5xl leading-normal text-right mb-6'
                >
                    Я <b className='text-violet drop-shadow-md'>не умею</b> доставать кроликов из шляпы, зато <b className='text-violet'>умею</b> делать сайты с помощью:
                </motion.h2>
                <ul className='flex justify-center flex-wrap gap-6'>
                    {
                        skillsData.map(item =>
                            <motion.li
                                key={item.title}
                                custom={skillsData.indexOf(item)}
                                variants={itemsAnimation}
                                className='bg-blue w-[200px] h-[200px] flex justify-center items-center shadow-[0px_0px_15px_0px_#3A396BFF]'>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={140}
                                    height={140}
                                    priority
                                />
                            </motion.li>
                        )
                    }
                </ul>
            </div>
        </motion.section>
    );
};

export default Skills;