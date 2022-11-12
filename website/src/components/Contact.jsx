import React from "react";
import styled from 'styled-components';

// Styling
const ContactDiv = styled.div`
    padding: 30vh 20vw;
    display: flex;
    justify-content: center;
    gap: 10rem;
`;

// Contact Component
const Contact = (props) => {
    return (
        <ContactDiv>
            <div>
                <h1>Let's Connect</h1>
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
            </div>
            <div>
                <h1>Find Me</h1>
                <a href="https://github.com/emilio-fv" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="http://www.linkedin.com/in/emiliofv" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
        </ContactDiv>
    )
}

export default Contact; 