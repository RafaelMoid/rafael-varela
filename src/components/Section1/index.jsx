import React from "react";
import styled from 'styled-components';
import { backgroundColor, terciaryColor } from "../UI/variables";

const StyledSection = styled.section `
    background-color: ${backgroundColor} !important;
    display: flex;
    justify-content: space-between;
    padding: 5rem 5vw;
    height: 10vh;
    align-items: center;
    // border-bottom: 4px solid ${terciaryColor} !important;
`;

const StyledFrase = styled.h2 `
    color: primaryColor;
`;

const StyledFrase2 = styled.h2 `
    background-color: #ffffff;
`;

const StyledFrase3 = styled.h3 `
    color: #ffffff;
`;


const Section1 = () => {
    return (
        <StyledSection>
                <StyledFrase>Rafael</StyledFrase>
                <StyledFrase2>Varela</StyledFrase2>
                <StyledFrase3>is awesome</StyledFrase3>
        </StyledSection>
    );
};

export default Section1;