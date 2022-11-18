import '../App.css'
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Main = (props) => {
    const aboutRef = useRef();

    const executeScroll = () => {
        console.log("click");
    }

    return (
        <>
            <Navbar />
            <Intro />
            <About ref={ aboutRef } executeScroll={ executeScroll }/>
            <Projects />
            <Experience />
            <Contact />
        </>
    )
}

export default Main;