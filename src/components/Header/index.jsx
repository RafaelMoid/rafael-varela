import React from "react";
import styled from 'styled-components';
import { backgroundColor, terciaryColor } from "../UI/variables";

const StyledHeader = styled.header `
height: 55px;
width: 100%;
background-color: ${backgroundColor};
color: #ffffff;
display: flex;
align-items: center;
border-bottom: 4px solid ${terciaryColor} !important;
position: fixed;
z-index: 9999;
> div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  h2 {
    font-size: 24px;
  }
  ul {
    display: none;
    li {
      a {
        color: white;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: 300ms;
        :hover {
          color: black;
          cursor: pointer;
        }
      }
    }
    @media (min-width: 700px) {
      display: flex;
      gap: 20px;
    }
  }
}
`;


//Modelo 1 de Header
// const StyledHeader = styled.header `
//     background-color: ${backgroundColor} !important;
//     display: flex;
//     justify-content: space-between;
//     padding: 0 15vw;
//     height: 5rem;
//     align-items: center;
//     border-bottom: 4px solid ${terciaryColor} !important;
// `;

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