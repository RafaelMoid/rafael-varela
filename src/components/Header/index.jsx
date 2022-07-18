import React from "react";
import styled from 'styled-components';
import { backgroundColor, terciaryColor } from "../UI/variables";

const StyledHeader = styled.header`
    background-color: ${backgroundColor};
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
    border-bottom: 4px solid var ${terciaryColor};
`;



const Header = () => {
    return (
        <StyledHeader>
            <a href="" rel="home">Rafael Varela</a>
            <nav>
                <a href="" >About me</a>
                <a href="" >My projects</a>
                <a href="" >Contact me</a>
            </nav>
        </StyledHeader>
    );
};

export default Header;