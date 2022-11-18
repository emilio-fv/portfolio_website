import React from "react";
import styled from 'styled-components';

// Styling
const ContactDiv = styled.div`
    font-size: 3vh;
    padding: 30vh 15vw 35vh 15vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const MainDiv = styled.div`
    display: flex;
    border: 2px solid red;
`;

const LeftDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const RightDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
`;

// Contact Component
const Contact = (props) => {
    return (
        <>
            <ContactDiv>
                <h1>Let's Connect</h1>
                <MainDiv>
                    <LeftDiv>
                        <form action="#">
                            <div>
                                <label htmlFor="">Subject</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label htmlFor="">Message</label>
                                <textarea></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </LeftDiv>
                    <RightDiv>
                        <a style={{ textDecoration: 'none' }} href="https://github.com/emilio-fv" target="_blank" rel="noopener noreferrer">Github</a>
                        <a style={{ textDecoration: 'none' }} href="http://www.linkedin.com/in/emiliofv" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </RightDiv>
                </MainDiv>
            </ContactDiv>
            <p style={{ textAlign: 'center', fontSize: '3vh', marginBottom: '2vh'}}>Designed & Built by Emilio Vazquez</p>
        </>
    )
}

export default Contact; 