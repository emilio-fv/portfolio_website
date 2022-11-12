import React from "react";
import styled from 'styled-components';

// Styling
const ExperienceDiv = styled.div`
    // border: 2px solid red;
    padding: 30vh 20vw;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Entry = styled.div`
    // border: 2px solid red;
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 3vh;
`;

// Experience Component
const Experience = (props) => {
    return (
        <ExperienceDiv>
            <h1>Experience</h1>
            <Entry>
                <div>
                    <h4>Company/Institution</h4>
                </div>
                <div>
                    <h4>Job Title</h4>
                    <p>Description</p>
                </div>
            </Entry>
            <Entry>
                <div>
                    <h4>Company/Institution</h4>
                </div>
                <div>
                    <h4>Job Title</h4>
                    <p>Description</p>
                </div>
            </Entry>
            <Entry>
                <div>
                    <h4>Company/Institution</h4>
                </div>
                <div>
                    <h4>Job Title</h4>
                    <p>Description</p>
                </div>
            </Entry>
        </ExperienceDiv>
    )
}

export default Experience;