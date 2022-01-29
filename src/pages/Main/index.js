import React from 'react';
import { BlockTasks } from '../../components/BlockTasks';
import styled from 'styled-components';
import { blocksMock } from './blocksMock';

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  
  box-sizing: border-box;
  
  height: calc(100vh - 110px);
  padding: 20px;
  
  background-color: #0079BF;
  
  @media only screen and (max-width: 600px) {  
    flex-direction: column;
    align-items: center;
    
    overflow: scroll;
    
    height: calc(100vh - 55px);
  }
  @media only screen and (min-width: 600px) {

  }
`;

export const Main = () => {
  return (
    <StyledMain>
      {blocksMock.map(block => <BlockTasks {...block}/>)}
    </StyledMain>
  );
};
