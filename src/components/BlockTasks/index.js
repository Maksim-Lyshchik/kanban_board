import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskBacklog } from '../../action/task';
import { Input } from '../Input';
import { getUnicId } from '../../helpers/getUnicId';
import { Button } from '../Button';
import { TypesButton } from '../../constants/TypesButton';
import { Select } from '../Select';
import { TypesBlocks } from '../../constants/TypesBlocks';
import { selectIdsTasks } from '../../selectors/tasks';
import { changeStatusTask } from '../../action/task/changeStatusTask';

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
  const [id, setId] = useState('');
  const idsTasks = useSelector(selectIdsTasks);
  const newId = getUnicId(idsTasks);

  const handleClickAdd = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  const handleClickSubmit = useCallback(() => {
    if (blockName === TypesBlocks.BACKLOG) {
      if (!value) {
        return;
      }

      dispatch(addTaskBacklog({ id: newId, title: value, status: blockName }));
    } else if ([TypesBlocks.READY, TypesBlocks.IN_PROGRESS, TypesBlocks.FINISHED].includes(blockName)) {
      if (!id) {
        const defaultId = selectTasks[0].id;

        dispatch(changeStatusTask({ id: defaultId, status: blockName }))
        setId('');
        return setIsShow(!isShow);
      }
      dispatch(changeStatusTask({ id, status: blockName }))
      setId('');
    }

    setValue('');
    setIsShow(!isShow);
  }, [blockName, dispatch, id, isShow, newId, selectTasks, value]);

  const handleChangeInput = useCallback(({ target }) => {
    const { value } = target;
    setValue(value)
  }, []);

  const handleChangeSelect = useCallback(({ target }) => {
    const { value } = target;
    if (value) {
      setId(value)
    }
  }, []);

  return (
    <StyledBlockTasks>
      <StyledNameBlockTask>{blockName}</StyledNameBlockTask>
      <StyledTasks>
        {tasks.map(({ id, title }) => <StyledTask key={id}>{title}</StyledTask>)}
      </StyledTasks>
      {isShow && (
        isCreateNewTasks ? (
        <Input onChange={handleChangeInput} value={value} />
        ) : <Select onChange={handleChangeSelect} options={selectTasks} />
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
