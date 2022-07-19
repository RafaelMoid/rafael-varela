import React from "react";
import styled from 'styled-components';
import { backgroundColor, primaryColor } from "../UI/variables";

const StyledSection = styled.section `
    background-color: ${backgroundColor} !important;
    display: flex;
    justify-content: space-between;
    padding: 5rem 5vw;
    height: 10vh;
    align-items: center;
    // border-bottom: 4px solid ${primaryColor} !important;
`;

const Hero = styled.h1 `
    color: ${primaryColor};
    height: 24.375rem;
    margin: 0 auto;
    max-height: 54vw;
    max-width: 43.75rem;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    width: 90vw;
    z-index: 1;
    font-size: 2.25rem;
    font-weight: 900;
    line-height: 2.25rem;
`;

const HeroBox = styled.h1 `
    color: ${backgroundColor};
    background-color: ${primaryColor};
`;

const Section1 = () => {
    return (
        <StyledSection>
                <Hero>
                    <span>Rafael</span>
                    <HeroBox>Varela</HeroBox>
                    <span>is awesome!</span>
                </Hero>
        </StyledSection>
    );
};

export default Section1;