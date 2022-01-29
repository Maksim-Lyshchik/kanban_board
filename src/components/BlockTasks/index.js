import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { useDispatch } from 'react-redux';
import { addTask } from '../../action/task';

const StyledBlockTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  
  width: 282px;
  height: max-content;
  max-height: 100%;
  border-radius: 10px;
  
  padding: 12px 12px 8px 12px;
  margin-right: 24px;
  
  background-color: #EBECF0;

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 50px;
  }
`;

const StyledNameBlockTask = styled.p`
  margin-top: 0;
  margin-bottom: 16px;

  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

const StyledTasks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  box-sizing: border-box;
  width: 100%;
  
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  
  width: 100%;
  border-radius: 5px;
  
  margin-bottom: 16px;
  padding: 6px 8px;

  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  
  background-color: #FFFFFF;
`;

const StyledAddButton = styled.div`
  display: flex;
  align-items: center;
`;

export const BlockTasks = ({ blockName, tasks}) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(addTask({id: 1, title: 'REDUX TASK'}))
  }, [dispatch])

  return (
    <StyledBlockTasks>
      <StyledNameBlockTask>{blockName}</StyledNameBlockTask>
      <StyledTasks>
        {tasks.map(({id, title }) => <StyledTask key={id}>{title}</StyledTask>)}
      </StyledTasks>
      <StyledAddButton onClick={handleClick}>
        <Icon type='plus' />
        <span>Add card</span>
      </StyledAddButton>
    </StyledBlockTasks>
  );
};
