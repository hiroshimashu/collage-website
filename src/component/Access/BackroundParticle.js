import React from 'react';
import Particles from 'react-particles-js';

const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const particleHeight =  windowHeight * 0.33;


function BackgroundParticles(props) {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 30
                    },
                    size: {
                        value: 20,
                        random: false
                    },
                    color:{
                        value:'#e4007f'
                    },
                    line_linked: {
                        enable: false
                    }
                }
            }}
            width = {100 + 'vw'}
            height = { 100 +'vh'}
            style =  {{
                position:'absolute',
                zIndex: '-100',
                left: 0
            }}
            className =   'particleWrapper'
        />
    );
}

export default BackgroundParticles;