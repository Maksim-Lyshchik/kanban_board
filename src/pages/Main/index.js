import React from 'react';
import { BlockTasks } from '../../components/BlockTasks';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  
  box-sizing: border-box;
  
  height: calc(100vh - 110px);
  padding: 20px;
  
  background-color: #0079BF;
`;

export const Main = () => {
  return (
    <StyledMain>
      <BlockTasks/>
      <BlockTasks/>
      <BlockTasks/>
      <BlockTasks/>
    </StyledMain>
  );
};
