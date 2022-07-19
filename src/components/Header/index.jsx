import React from "react";
import styled from 'styled-components';
import { backgroundColor, terciaryColor } from "../UI/variables";

const StyledHeader = styled.header `
    background-color: ${backgroundColor} !important;
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 5rem;
    align-items: center;
    border-bottom: 4px solid ${terciaryColor} !important;
`;

const StyledA = styled.a `
    color: #ffffff;
`;


const Header = () => {
    return (
        <StyledHeader>
            <StyledA href="/" rel="home">Rafael Varela</StyledA>
            <nav>
                <StyledA href="/about" >About me</StyledA>
                <StyledA href="/projects" >My projects</StyledA>
                <StyledA href="/contact" >Contact me</StyledA>
            </nav>
        </StyledHeader>
    );
};

export default Header;