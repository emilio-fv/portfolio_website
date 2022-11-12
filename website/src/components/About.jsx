import React from "react";

const About = (props) => {
    return (
        <div id="about">
            <div className="left">
                <h1>About</h1>
                <p>Hi! I'm Emilio, a fullstack developer who is passionate about bringing fresh and creative ideas to life. I have a background as a classically trained violinist and music teacher, which taught me to not only find the beauty in the details but to have the patience to create it. I began my coding journey at the beginning of 2022 with a free online course and have been programming ever since. I recently graduated from a coding bootcamp at <a href="https://www.codingdojo.com/" target="_blank" rel="noopener noreferrer">Coding Dojo</a> and am currently looking for new opportunities to continue learning and growing as a developer</p>
                <p>As always, I'm interested in collaborating with other developers who are looking to challenge themselves with a little side project here and there.</p>
            </div>
            <div className="right"> 
                <img src="./img/headshot-1.JPG" alt="Headshot" />
            </div>
        </div>
    )
}

export default About;