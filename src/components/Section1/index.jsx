import React from "react";
import styled from 'styled-components';
import { backgroundColor, primaryColor } from "../UI/variables";

const StyledSection = styled.section `
    background-color: ${backgroundColor} !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 4px solid ${primaryColor} !important;
`;

const StyledCanvas = styled.canvas`
    height: 100%;
    left: 0;
    mix-blend-mode: overlay;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`;

const Hero = styled.h1 `
    color: ${primaryColor};
    height: 24.375rem;
    margin: 7rem auto;
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

const HeroFirstBox = styled.h1`
    display: block;
    font-size: min(4.88rem);
    line-height: .8;
    margin-right: 0.18rem;
    `;

const HeroBox = styled.h1 `
    color: ${backgroundColor};
    background-color: ${primaryColor};
    font-size: min(4.5rem);
    line-height: 1;
    margin: 0;
    padding: 0 0.5rem;
    display: inline-block;
    transition: 200ms background linear;
`;

const HeroTagLine = styled.h1 `
    --top: -7px;
    --rotation: 0deg;
    --scale: 1.1;
    --size: 8.48vw;
    --size-lg: 66px;
    display: block;
    font-size: min(2.9rem);
    line-height: .85;
    margin: 0.125rem -0.125rem 0;
`;

const Section1 = () => {
    return (
        <StyledSection>
            {/* <StyledCanvas /> */}
            <Hero>
                <HeroFirstBox>Rafael</HeroFirstBox>
                <HeroBox>Varela</HeroBox>
                <HeroTagLine>is awesome!</HeroTagLine>
            </Hero>
        </StyledSection>
    );
};

export default Section1;