import '../App.css'
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Main = (props) => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <Navbar handleClick={ handleClick } />
            <Intro />
            <About ref={ ref }/>
            <Projects />
            <Experience />
            <Contact />
        </>
    )
}

export default Main;