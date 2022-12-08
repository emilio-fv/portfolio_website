import React, { forwardRef } from "react";
import styled from 'styled-components'
import img1 from '../img/2.png';

// Styling
const ProjectsDiv = styled.div`
    // border: 2px solid red;
    padding: 20vh 15vw 30vh 15vw;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ProjectDiv = styled.div`
    // border: 2px solid red;
    font-size: 2.25vh;
    display: flex;
    gap: 5rem;
`;


const StyledImg = styled.img`
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 500px;
`;

// Projects Component
const Projects = forwardRef((props, ref) => {
    return (
        <ProjectsDiv ref={ref}>
            <h1>Projects</h1>
            <ProjectDiv>
                <StyledImg></StyledImg>
                <div>
                    <h2>Note-d</h2>
                    <a href="https://github.com/emilio-fv/Note-d/tree/main" target="_blank" rel="noopener noreferrer">Github</a>
                    <p>A Flask web application for music enthusiasts to share review of the favorite (or least favorite) music with other users. Integrated with the Spotify API using the Spotipy library, users can search and view albums, artists, tracks, and reviews by other users. The project is currently deployed at: </p>
                    {/* <a href="#" target="_blank" rel="noopener noreferrer">TODO: add deployment link</a> */}
                </div>
            </ProjectDiv>
            {/* <ProjectDiv>
                <div>
                    <img src="#" alt="Project icon" />
                </div>
                <div>
                    <h2>Food App</h2>
                    <a href="https://github.com/Lanceagleron/mern_group_project" target="_blank" rel="noopener noreferrer">Github</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste omnis accusamus non quo? Nemo, cum provident. Exercitationem, quas vitae? Magnam aut dolores maxime praesentium perferendis tenetur exercitationem ipsa quo ducimus.</p>
                </div>
            </ProjectDiv> */}
            <ProjectDiv>
                <div>
                    <img src="#" alt="Project icon" />
                </div>
                <div>
                    <h2>E-Commerce</h2>
                    <a href="https://github.com/emilio-fv/e-commerce" target="_blank" rel="noopener noreferrer">Github</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste omnis accusamus non quo? Nemo, cum provident. Exercitationem, quas vitae? Magnam aut dolores maxime praesentium perferendis tenetur exercitationem ipsa quo ducimus.</p>
                </div>
            </ProjectDiv>
        </ProjectsDiv>
    )
});

export default Projects;