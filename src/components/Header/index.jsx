import React from "react";
import styled from 'styled-components';
import { backgroundColor, terciaryColor } from "../UI/variables";

const StyledHeader = styled.header `
    background-color: ${backgroundColor} !important;
    display: block;
    justify-content: space-between;
    padding: 0 15vw;
    height: 5rem;
    align-items: center;
    border-bottom: 4px solid ${terciaryColor} !important;
z-index: 9999;
> div, nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  h2 {
    font-size: 24px;
  }
      a {
        color: white;
        padding-top: 0.8rem;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        gap: 5px;
        transition: 300ms;
        :hover {
          color: ${terciaryColor};
          cursor: pointer;
  justify-content: center;
        }
      }
   }
}
@media (min-width: 700px) {
  display: flex;
  gap: 20px;
  justify-content: space-between;

  a {
    margin: 0 0.5rem 0 0.5rem;
  }
}
`;

const RafaelVarela = styled.a`
  padding-top: 0.8rem;
  display: flex;
  font-weight: bold;
  color: white;
  align-content: center;
  align-items: center;
  justify-content: center;:hover {
    color: ${terciaryColor};
    cursor: pointer;
  }

  @media (min-width: 700px) {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    font-size: 2rem;
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
            <RafaelVarela href="/" rel="home">Rafael Varela</RafaelVarela>
            <nav>
                <StyledA href="/about" >About</StyledA>
                <StyledA href="/projects" >Projects</StyledA>
                <StyledA href="/contact" >Contact</StyledA>
            </nav>
        </StyledHeader>
    );
};

export default Header;