import React from "react";
import { animated, config, useSpring } from "react-spring";
import styled from 'styled-components';

// Styling
const Nav = styled.nav`
    // border: 2px solid red; // BORDER CHECK
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

const NavItem = styled.li`
    list-style: none;
    font-size: 2.75vh;
`;

const NavButton = styled.button`
    padding: 1vh 1vw;
    border: .5px solid #bae8e8;
    font-size: 2.75vh;
    background-color: black;
    // box-shadow: 2px 2px #bae8e8;
`;

// Navbar Component
const Navbar = (props) => {
    const handleClick = props.handleClick;

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
                    <NavItem><span onClick={ handleClick }>About</span></NavItem>
                </animated.div>
                <animated.div style={ secondItem }>
                    <NavItem>Projects</NavItem>
                </animated.div>
                <animated.div style={ thirdItem  }>
                    <NavItem>Experience</NavItem>
                </animated.div>
                <animated.div style={ fourthItem }>
                    <NavItem>Contact</NavItem>
                </animated.div>
                <animated.div style={ fifthItem }>
                    <NavItem><NavButton>Resume</NavButton></NavItem>
                </animated.div>

            </NavMenu>
        </Nav>
    )
}

export default Navbar;