import React from "react";
import styled from 'styled-components';
import { backgroundColor2 , backgroundColor3 } from "../UI/variables";

const StyledFooter = styled.footer `
    background-color: ${backgroundColor3};
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
    border-top: 4px solid ${backgroundColor2};
`;

const StyledA = styled.a `
    color: #ffffff;
`;


const Footer = () => {
    return (
        <StyledFooter>
            <StyledA href="/" rel="home">Powered by Rafael Varela</StyledA>
            <nav>
                <StyledA href="https://www.linkedin.com/in/rafaelvarelati/" target="_blank">LinkedIn</StyledA>
                <StyledA href="https://github.com/RafaelMoid" target="_blank" >GitHub</StyledA>
                <StyledA href="https://www.instagram.com/rafaelmoid/" target="_blank" >Instagram</StyledA>
            </nav>
        </StyledFooter>
    );
};

export default Footer;