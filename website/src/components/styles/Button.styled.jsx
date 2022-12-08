import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
    padding: 1vh 1vw;
    border: ${({ theme }) => theme.border.normal };
    font-size: 2.5vh;
    &:hover {
        text-shadow: ${({ theme }) => theme.text.hover };
    }
`;