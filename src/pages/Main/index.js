import React from 'react';
import { BlockTasks } from '../../components/BlockTasks';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  min-height: 100%;
  
  padding: 20px;
  
  background-color: #0079BF;
`;

export const Main = () => {
  return (
    <StyledMain>
      <BlockTasks/>
    </StyledMain>
  );
};