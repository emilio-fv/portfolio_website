import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { IntroDiv } from './styles/Intro.styled';

const Intro = () => {
    // Animations
    const topText = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 600,
        config: config.molasses,
    })
    const midText = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 675,
        config: config.molasses,
    })
    const bottomText = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 725,
        config: config.molasses,
    })

    return (
        <IntroDiv>
            <animated.div style={topText}>
                <h5>hi, my name is</h5>
            </animated.div>
            <animated.div style={midText}>
                <h1>Emilio Vazquez</h1>
            </animated.div>
            <animated.div style={bottomText}>
                <h3>Fullstack Developer</h3>
            </animated.div>
        </IntroDiv>
    )
}

export default Intro;