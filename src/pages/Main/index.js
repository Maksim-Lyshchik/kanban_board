import React from 'react';
import { BlockTasks } from '../../components/BlockTasks';
import styled from 'styled-components';
import { useTasks } from '../../hooks/useTasks';

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  
  box-sizing: border-box;
  
  height: calc(100vh - 110px);
  padding: 20px;
  
  background-color: #0079BF;
  
  @media only screen and (max-width: 1236px) {  
    flex-direction: column;
    align-items: center;
    
    overflow: scroll;
    
    height: calc(100vh - 55px);
  }
  @media only screen and (min-width:1236px) {

  }
`;

export const Main = () => {
  const tasks = useTasks();

  return (
    <StyledMain>
      {tasks.map(block => <BlockTasks {...block}/>)}
    </StyledMain>
  );
};
