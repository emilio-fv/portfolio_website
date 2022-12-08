import styled from 'styled-components';

export const Nav = styled.nav`
    height: 8vh;
    display: flex;
    justify-content: flex-end;
    padding: 6vh 3vw;
    top: 0;
    position: sticky;
    box-shadow: .5px 1px white;
    ul {
        display: flex;
        align-items: center;
        gap: 3vw;
        li {
            list-style: none;
            front-size: 2.75vh;
        }
    }
`;