import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import '../App.css'

const Main = (props) => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    
    return (
        <>
            <Navbar aboutRef={ aboutRef } projectsRef={ projectsRef } experienceRef={ experienceRef } contactRef = { contactRef }/>
            <Intro />
            <About ref={ aboutRef }/>
            <Projects ref={ projectsRef }/>
            <Experience ref={ experienceRef }/>
            <Contact ref={ contactRef }/>
        </>
    )
}

export default Main;