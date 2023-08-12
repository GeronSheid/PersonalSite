"use client"
import React from 'react';
import {motion} from "framer-motion";
import ParticlesArea from "@/components/ParticlesArea";

const heroBlockTitle = {
    hidden: {
        x: -1000,
        opacity: 0
    },
    visible: (custom : number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.5,
            duration: 0.3
        }
    }),
}

const magicAnimation= {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5
        }
    }
}

const Hero = () => {
    return (
        <section className='text-center flex justify-center min-h-[100vh] items-center py-12 mb-24 overflow-[none] bg-gradient-to-b from-blue to-darkGray'>
            <ParticlesArea/>
            <motion.div
                initial='hidden'
                whileInView='visible'
                className='container mx-auto max-w-screen-xl'
            >
                <div className='flex flex-col items-center justify-center gap-20 h-full'>
                    <h2 className='text-lightGray text-5xl'>
                        <motion.p
                            variants={heroBlockTitle}
                        >Добро пожаловать туда, где начинается</motion.p>
                        <motion.b
                            variants={magicAnimation}
                            className='text-violet mt-5 block'
                        >магия!</motion.b>
                    </h2>
                    <motion.button
                        custom={2}
                        variants={heroBlockTitle}
                        className='bg-blue rounded-xl px-3 py-1 text-white text-2xl'>
                        Начнем?
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;