import React from "react";
import styled from 'styled-components';

// Styling
const Nav = styled.nav`
    // border: 2px solid red; // BORDER CHECK
    height: 8vh;
    display: flex;
    justify-content: flex-end;
    padding: 5vh 2vw;
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 3.7vw;
`;

const NavItem = styled.li`
    list-style: none;
    font-size: 2vh;
`;

const NavButton = styled.button`
    padding: .8vh 1vw;
    border: none;
    font-size: 2vh;
    background-color: #2c698d;
    box-shadow: 3px 3px #bae8e8;
`;

// Navbar Component
const Navbar = (props) => {
    return (
        <Nav>
            <NavMenu>
                <NavItem>About</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>Experience</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem><NavButton>Resume</NavButton></NavItem>
            </NavMenu>
        </Nav>
    )
}

export default Navbar;