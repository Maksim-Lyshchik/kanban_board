import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { useDispatch } from 'react-redux';
import { addTaskBacklog } from '../../action/task';
import { Input } from '../Input';
import { getUnicId } from '../../helpers/getUnicId';
import { Button } from '../Button';
import { TypesButton } from '../../constants/TypesButton';
import { Select } from '../Select';
import { TypesBlocks } from '../../constants/TypesBlocks';

const StyledBlockTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  width: 100%;
  min-width: 282px;
  height: max-content;
  max-height: 100%;
  border-radius: 10px;

  padding: 12px 12px 8px 12px;
  margin-right: 24px;

  background-color: #EBECF0;

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 1236px) {
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

  overflow-y: scroll;

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

const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-radius: 5px;
  cursor: pointer;

  box-sizing: border-box;
  border: none;

  font-size: 18px;

  &:hover {
    background-color: #FFFFFF;
  }
`;

const StyledNameButton = styled.span`
  padding-left: 4px;
`;

export const BlockTasks = ({
  blockName,
  tasks,
  selectTasks,
  isCreateNewTasks= false,
}) => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const isSubmit = isShow;
  const [value, setValue] = useState('');
  const id = getUnicId([]);

  const handleClickAdd = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  const handleClickSubmit = useCallback(() => {
    dispatch(addTaskBacklog({ id, title: value, status: TypesBlocks.BACKLOG }));

    setIsShow(!isShow);
  }, [dispatch, id, isShow, value]);

  const handleChange = useCallback(({ target }) => {
    const { value } = target;
    setValue(value)
  }, [])

  return (
    <StyledBlockTasks>
      <StyledNameBlockTask>{blockName}</StyledNameBlockTask>
      <StyledTasks>
        {tasks.map(({ id, title }) => <StyledTask key={id}>{title}</StyledTask>)}
      </StyledTasks>
      {isShow && (
        isCreateNewTasks ? (
        <Input onChange={handleChange} value={value} />
        ) : <Select options={selectTasks} />
      )}
      {!isSubmit && <Button onClick={handleClickAdd} color={TypesButton.OUTLINE}>
        <Icon type="plus" fill="#5E6C84" />
        <StyledNameButton>Add card</StyledNameButton>
      </Button>}
      {isSubmit && <Button onClick={handleClickSubmit} color={TypesButton.PRIMARY}>
        Submit
      </Button>}
    </StyledBlockTasks>
  );
};
