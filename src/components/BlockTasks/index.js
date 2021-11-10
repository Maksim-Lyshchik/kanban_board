import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

const StyledBlockTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  
  width: 282px;
  border-radius: 10px;
  
  padding: 12px 12px 8px 12px;
  
  background-color: #EBECF0;
`;

const StyledNameBlockTask = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
`;

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  
  width: 100%;
  border-radius: 5px;
  
  margin-bottom: 16px;
  padding: 6px 8px;
  
  background-color: #FFFFFF;
`;

const StyledAddButton = styled.div`
  display: flex;
  align-items: center;
`;

export const BlockTasks = () => {
  return (
    <StyledBlockTasks>
      <StyledNameBlockTask>Backlog</StyledNameBlockTask>
      <StyledTask>Task task task task task task task task task task task task 1</StyledTask>
      <StyledTask>Task 2</StyledTask>
      <StyledTask>Task 3</StyledTask>
      <StyledAddButton>
        <Icon type='plus' />
        <span>Add card</span>
      </StyledAddButton>
    </StyledBlockTasks>
  );
};
