import React from "react";
import styled from 'styled-components';
import { backgroundColor, terciaryColor, secondaryColor } from "../UI/variables";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { IconContext } from "react-icons";

const FlexBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0px 1rem;
    width: 90%;
    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0px 6rem;
      }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;        
    
    
`;

const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    @media (min-width: 700px) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 30px;
        width: 100%;
}       
    
`;

const VerticalDiv = styled.div`
    margin: 0 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
`;

const VerticalDiv2 = styled.div`
    margin: 0 0.5rem 0 0.5rem;
    justify-content: center;    
    gap: 15px;
    display: flex;
    flex-direction: column;@media (min-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        justify-content: space-between;
        gap: 30px;
        width: 50%;
    }
     
`;

const FirstFrase = styled.p`
    text-transform: uppercase;
    font-size: 1rem;
    @media (min-width: 700px) {
        font-size: 2rem;
    }
`;

const StyledH1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    @media (min-width: 700px) {
        font-size: 4rem;
    }
`;

const StyledH2 = styled.h2`
    font-size: 1rem;
    @media (min-width: 700px) {
        font-size: 2rem;display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        justify-content: space-between;
        gap: 30px;
        width: 80%;
        flex-wrap: wrap;
    }
`;

const SecondFrase = styled.p`
    font-size: 1rem;
    color: ${terciaryColor};
    font-weight: bold;
    text-transform: uppercase;
    @media (min-width: 700px) {
        font-size: 2rem;
    }
`;

const StyledSpan = styled.span`
    font-size: 0.8rem;
    width: 55%;

    a {
        color: blue;
    }

    @media (min-width: 700px) {
        font-size: 1.4rem;
        width: 40%;
    }
`;

const StyledSpan2 = styled.span`
    font-size: 0.8rem;

    a {
        color: blue;
    }

    @media (min-width: 700px) {
        font-size: 1.4rem;
        width: 80%;
        justify-content: right;
        flex-wrap: wrap;        
    }
`;

const FotoPerfil = styled.img`
    display: flex;
    margin: 0 0.5rem 0 0.5rem;
    border-radius: 10rem;
    width: 8rem;
    aspect-ratio: 1 / 1;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    @media (min-width: 700px) {
        border-radius: 20rem;
        width: 12rem;
        justify-content: flex-end;
        align-items: flex-end;
      }
`;

const GithubButton = styled.button`
    color: ${backgroundColor};
    background-color: ${secondaryColor};
    border-radius: 0.5rem;
    width: 10rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0.5rem 2rem 0.5rem;
    @media (min-width: 700px) {
        width: 15rem;
        height: 4rem;
        font-size: 2rem;        
      }
`;

const LinkedInButton = styled.button`
    color: ${secondaryColor};
    background-color: ${backgroundColor};
    border-radius: 0.5rem;
    width: 10rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: bold;
    align-content: center;
    justify-content: center;
    margin: 1rem 0.5rem 2rem 0.5rem;
    @media (min-width: 700px) {
        width: 15rem;
        height: 4rem;
        font-size: 2rem;        
      }
`;



const AboutMe = () => {
    return (
        <FlexBox>
            <VerticalDiv>
                <FirstFrase>Hi there, i'm</FirstFrase>
                <StyledH1>Rafael Varela</StyledH1>
                <SecondFrase>frontend developer</SecondFrase>
                <StyledSpan>I'm a frontend developer web developer, based em Pernambuco, Brazil.</StyledSpan>
            </VerticalDiv>
            <VerticalDiv2>
                <HorizontalDiv>
                        <FotoPerfil src="./rafael.png"/>
                        <VerticalDiv2>
                            <StyledH2>Tecnology, games and music</StyledH2>
                            <StyledSpan2>I'm started my journey as developer back to 2020 and since there i keep improoving myself continuosly, see more<a href=""> about me</a>.</StyledSpan2>
                        </VerticalDiv2>
                </HorizontalDiv>
                <ButtonDiv>
                    <IconContext.Provider value={{ color: "black", size: "1.5em",  className: 'react-icons' }}> 
                        <GithubButton> <TiSocialGithub />Github</GithubButton>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "white", size: "1.5em",  className: 'react-icons' }}>   
                        <LinkedInButton><TiSocialLinkedin />LinkedIn</LinkedInButton>
                    </IconContext.Provider>
                </ButtonDiv>
            </VerticalDiv2>
        </FlexBox>
    );
};

export default AboutMe;