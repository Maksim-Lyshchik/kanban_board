import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledSelect = styled.select`
  width: 100%;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;

  margin-bottom: 16px;
  padding: 6px 8px;

  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  background-color: ${colors.white};

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const StyledOption = styled.option`
  width: 100%;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;

  margin-bottom: 16px;
  padding: 6px 8px;

  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  background-color: ${colors.white};

  cursor: pointer;
`;

export const Select = ({ options, onChange }) => {
  const hasOptions = options?.length;

  return (
    <StyledSelect onChange={onChange}>
      {hasOptions ? options.map(({ id, title }) => <StyledOption key={id} value={id}>{title}</StyledOption>) : (
        <StyledOption value="">Task list is empty</StyledOption>
      )}
    </StyledSelect>
  );
};
