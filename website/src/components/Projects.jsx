import React from "react";
import styled from 'styled-components'

// Styling
const ProjectsDiv = styled.div`
    // border: 2px solid red;
    padding: 30vh 20vw;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ProjectDiv = styled.div`
    // border: 2px solid red;
    font-size: 2.25vh;
    display: flex;
`;

// Projects Component
const Projects = (props) => {
    return (
        <ProjectsDiv>
            <h1>Projects</h1>
            <ProjectDiv>
                <div>
                    <img src="#" alt="Project icon" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste omnis accusamus non quo? Nemo, cum provident. Exercitationem, quas vitae? Magnam aut dolores maxime praesentium perferendis tenetur exercitationem ipsa quo ducimus.</p>
                </div>
            </ProjectDiv>
            <ProjectDiv>
                <div>
                    <img src="#" alt="Project icon" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste omnis accusamus non quo? Nemo, cum provident. Exercitationem, quas vitae? Magnam aut dolores maxime praesentium perferendis tenetur exercitationem ipsa quo ducimus.</p>
                </div>
            </ProjectDiv>
            <ProjectDiv>
                <div>
                    <img src="#" alt="Project icon" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste omnis accusamus non quo? Nemo, cum provident. Exercitationem, quas vitae? Magnam aut dolores maxime praesentium perferendis tenetur exercitationem ipsa quo ducimus.</p>
                </div>
            </ProjectDiv>
        </ProjectsDiv>
    )
}

export default Projects;