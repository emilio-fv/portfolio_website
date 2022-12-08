import React from "react";
import { animated, config, useSpring } from "react-spring";
import { Nav } from './styles/Nav.styled';
import { Button } from './styles/Button.styled';
import { ResumeButton } from "./styles/ResumeButton.styled";

const Navbar = ({ aboutRef, projectsRef, experienceRef, contactRef }) => {
    const handleAboutClick = (e) => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    const handleProjectsClick = (e) => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    const handleExperienceClick = (e) => {
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    const handleContactClick = (e) => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Animations
    const firstItem = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        delay: 250, 
        config: config.molasses
    })
    const secondItem = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        delay: 325, 
        config: config.molasses
    })
    const thirdItem = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        delay: 400, 
        config: config.molasses
    })
    const fourthItem = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        delay: 475, 
        config: config.molasses
    })
    const fifthItem = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        delay: 525, 
        config: config.molasses
    })

    return (
        <Nav>
            <ul>
                <animated.div style={ firstItem }>
                    <li>
                        <Button onClick={e => handleAboutClick()}>About</Button>
                    </li>
                </animated.div>
                <animated.div style={ secondItem }>
                    <li>
                        <Button onClick={e => handleProjectsClick()}>Projects</Button>
                    </li>
                </animated.div>
                <animated.div style={ thirdItem  }>
                    <li>
                        <Button onClick={e => handleExperienceClick()}>Experience</Button>
                    </li>
                </animated.div>
                <animated.div style={ fourthItem }>
                    <li>
                        <Button onClick={e => handleContactClick()}>Contact</Button>
                    </li>
                </animated.div>
                <animated.div style={ fifthItem }>
                    <li>
                        <ResumeButton>Resume</ResumeButton>
                    </li>
                </animated.div>
            </ul>
        </Nav>
    )
}

export default Navbar;