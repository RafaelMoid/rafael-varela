import React from "react";
import styled from 'styled-components';
import { backgroundColor2 , backgroundColor3, terciaryColor } from "../UI/variables";

const StyledFooter = styled.footer `
    background-color: ${backgroundColor3};
    display: block;
    justify-content: space-between;
    padding: 0 15vw;
    height: 5rem;
    align-items: center;
    border-top: 4px solid ${backgroundColor2};
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

const StyledA = styled.a `
    color: #ffffff;color: white;
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