import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 100%;
`;
const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;

  margin-bottom: 16px;
  padding: 6px 8px;

  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  
  &:focus {
    outline: none;
  }
`;

export const Input = ({ ...props }) => {

  return (
    <StyledLabel {...props}>
      <StyledInput />
    </StyledLabel>
  );
};
