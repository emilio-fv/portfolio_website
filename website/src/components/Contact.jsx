import React, { useState, forwardRef } from "react";
import styled from 'styled-components';
import { send } from 'emailjs-com';

// Styling
const ContactDiv = styled.div`
    font-size: 3vh;
    padding: 20vh 15vw 35vh 15vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const MainDiv = styled.div`
// border: 2px solid red;
    display: flex;
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
const Contact = forwardRef((props, ref) => {
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        mailSent: false,
        error: null
    })

    const handleChange = (e) => {
        console.log(e.target.name)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'portfolio_website',
            'template_jbnjdgf',
            formData,
            'tHeaGfRdFZHccy_bq'
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    return (
        <>
            <ContactDiv ref={ ref }>
                <h1>Let's Connect</h1>
                <MainDiv>
                    <LeftDiv>
                        <form action="#" onSubmit={e => handleSubmit(e) }>
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="firstName" onChange={e => handleChange(e)}/>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="text" name="lastName" onChange={e => handleChange(e)}/>
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="email" name="email" onChange={e => handleChange(e)}/>
                            </div>
                            <div>
                                <label>Message:</label>
                                <textarea name="message" onChange={e => handleChange(e) }></textarea>
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
            <p style={{ textAlign: 'center', fontSize: '2.5vh', marginBottom: '2vh'}}>Designed & Built by Emilio Vazquez</p>
        </>
    )
});

export default Contact; 