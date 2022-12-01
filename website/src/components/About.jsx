import React, { forwardRef } from "react";
import styled from 'styled-components';
import Headshot from '../img/haedshot.JPG';
import Headshot2 from '../img/headshot2.jpg';

// Styling
const AboutDiv = styled.div`
    // border: 2px solid red;
    padding: 15vh 15vw 30vh 15vw;
`;

const Header = styled.div`
    font-size: 3vh;
    padding: 5vh 0;
`;

const Body = styled.div`
    font-size: 3vh;
    display: flex;
    align-items: center;
    gap: 10rem;
`;

const ImageDiv = styled.div`
    height: 300px;
    width: 3000px;
    border-radius: 50%;
    background-image: url(${Headshot2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;


// About Component
const About = forwardRef((props, ref) => {
    return (
        <AboutDiv ref={ ref }>
            <Header>
                <h1>About</h1>
            </Header>
            <Body>
                <div>
                    <p>Hi! I'm Emilio, a fullstack developer who is passionate about bringing fresh and creative ideas to life. I have a background as a classically trained violinist and music teacher, which taught me to not only find the beauty in the details but to have the patience to create it. I began my coding journey at the beginning of 2022 with a free online course and have been programming ever since. I recently graduated from a coding bootcamp at <a href="https://www.codingdojo.com/" target="_blank" rel="noopener noreferrer">Coding Dojo</a> and am currently looking for new opportunities to continue learning and growing as a developer.</p><br />
                    <p>As always, I'm interested in collaborating with other developers who are looking to challenge themselves with a little side project here and there.</p>
                </div>
                <ImageDiv></ImageDiv>
            </Body>
        </AboutDiv>
    )
});

export default About;