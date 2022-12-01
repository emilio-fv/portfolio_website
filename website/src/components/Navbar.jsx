import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from 'styled-components';

// Styling
const Nav = styled.nav`
    height: 8vh;
    display: flex;
    justify-content: flex-end;
    padding: 6vh 3vw;
    top: 0;
    position: sticky;
    box-shadow: .5px 1px white;
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 3.5vw;
`;

const NavLink = styled.li`
    list-style: none;
    font-size: 2.75vh;
`;

const Button = styled.button`
    padding: 1vh 1vw;
    border: none;
    font-size: 2.75vh;
    background-color: black;
    &:hover {
        // text-decoration: underline;
        color: grey;
    }
    `;

const ResumeButton = styled(Button)`
    border: .5px solid #bae8e8;
    // box-shadow: 2px 2px #bae8e8;
    &:hover {
        // background-color: white;
        // color: black;
        border: .5px solid grey;
        text-decoration: none;
    }
`;

// Navbar Component
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
            <NavMenu>
                <animated.div style={ firstItem }>
                    <NavLink><Button onClick={e => handleAboutClick() } >About</Button></NavLink>
                </animated.div>
                <animated.div style={ secondItem }>
                    <NavLink><Button onClick={e => handleProjectsClick() }>Projects</Button></NavLink>
                </animated.div>
                <animated.div style={ thirdItem  }>
                    <NavLink><Button onClick={e => handleExperienceClick() }>Experience</Button></NavLink>
                </animated.div>
                <animated.div style={ fourthItem }>
                    <NavLink><Button onClick={e => handleContactClick() }>Contact</Button></NavLink>
                </animated.div>
                <animated.div style={ fifthItem }>
                    <NavLink><ResumeButton>Resume</ResumeButton></NavLink>
                </animated.div>
            </NavMenu>
        </Nav>
    )
}

export default Navbar;