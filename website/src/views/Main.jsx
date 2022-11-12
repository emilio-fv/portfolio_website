import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";


const Main = (props) => {
    return (
        <>
            <Navbar />
            <Intro />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </>
    )
}

export default Main;