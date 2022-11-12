import React from "react";
import styled from 'styled-components';

// Styling
const IntroDiv = styled.div`
    // border: 2px solid red;
    padding: 30vh 20vw;
    font-size: 4vh;
`;

// Intro component
const Intro = (props) => {
    return (
        <IntroDiv>
            <h5>hi, my name is</h5>
            <h1>Emilio Vazquez</h1>
            <h3>Fullstack Developer</h3>
        </IntroDiv>
    )
}

export default Intro;