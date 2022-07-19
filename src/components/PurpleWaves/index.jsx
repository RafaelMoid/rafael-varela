import React from "react";
import styled, { keyframes } from 'styled-components';
import { backgroundColor, primaryColor } from "../UI/variables";

const waves = keyframes`
    animation: 5s linear 0s infinite normal none running animate;
    z-index: 3;
`;

const WavesDiv = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url(/white_wave.png);
`;

const WaveContainer = styled.div`
    width: 100%;
    background-color: ${backgroundColor};
    max-width: 100%;
    height: 70px;
    position: relative;
    overflow-x: hidden;
`;

const PurpleWaves = () => {
    return (
        <WaveContainer>
            <WavesDiv />
            <WavesDiv />
            <WavesDiv />
        </WaveContainer>
    );
};

export default PurpleWaves;