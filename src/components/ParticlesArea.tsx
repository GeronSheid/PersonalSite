import React, {useCallback} from 'react';
import {loadFull} from "tsparticles";
import {Particles} from "react-tsparticles";
import {Engine} from "tsparticles-engine";

const ParticlesArea = () => {

    const particlesInit = useCallback( async (engine : Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, [])

    return (
        <Particles
            className='w-full h-full absolute translate-z-0'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {enable: false},
                background: {
                    color: {
                        value: ''
                    },

                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90
                        },
                        repulse: {
                            distance: 100,
                            duration: 1.5
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#8167C9'
                    },
                    links: {
                        color: '#8167C9',
                        distance: 150,
                        opacity: 0.5,
                        width: 1,
                        enable: true
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 100
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 5
                        }
                    }
                },
                detectRetina: true
            }}/>
    );
};

export default ParticlesArea;