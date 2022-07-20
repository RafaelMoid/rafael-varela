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

// const BackgroundConfig = styled.div`
//     background-image: url("./bg-star.gif");
//     background-size: 150%;
//     background-position: center top;
//     background-repeat: no-repeat;
//     background-color: transparent;
//     opacity: 0.04;
//     z-index: -999;
// `;

const StyledCanvas = styled.canvas`
    height: 100%;
    background-image: url("./bg-star.gif");
    background-size: 150%;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: transparent;
    opacity: 0.04;
    z-index: -1;
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
    
    @media (min-width: 700px) {
        font-size: 8rem;
        margin: 0 auto;
        margin-right: 0.3rem;
      }
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

    @media (min-width: 700px) {
        font-size: 7.5rem;
        margin: 0 auto;
      }
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
        
    @media (min-width: 700px) {
        font-size: 4.73rem;
        margin: 0 auto;
        line-height: 0.95;
      }
`;

const HeroCycle = styled.button`
    background-image: url(https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1593806090/jason.af/rotate-off.png);
    border: 0;
    color: #ffffff;
    display: block;
    font-size: .75rem;
    font-variant: small-caps;
    font-weight: 400;
    height: 30px;
    letter-spacing: .2em;
    margin: 3rem auto;
    padding: 0;
    text-align: center;
    text-decoration: none;
    width: 30px;
    z-index: 20;
    background-color: transparent;
    background-size: contain;
    position: relative;
`;

const Section1 = () => {
    return (
        <StyledSection>
                <Hero>
                    <HeroFirstBox>Rafael</HeroFirstBox>
                    <HeroBox>Varela</HeroBox>
                    <HeroTagLine>is awesome!</HeroTagLine>
                    <HeroCycle />
                </Hero>
        </StyledSection>
    );
};

export default Section1;