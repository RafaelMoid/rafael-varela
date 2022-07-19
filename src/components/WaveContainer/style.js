import styled from 'styled-components';
import backgroundColor from '../UI/variables';


export const Container = styled.div`
  width: 100%;
  background-color: ${backgroundColor || 'transparent'};
  max-width: 100%;
  height: 70px;
  position: relative;
  overflow-x: hidden;
`;