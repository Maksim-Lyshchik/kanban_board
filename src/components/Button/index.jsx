import React from 'react';
import styled from 'styled-components';
import { applyBgColor } from './applyBgColor';
import { applyColor } from './applyColor';
import { SizesButton } from '../../constants/SizesButton';
import { applyHoverBGColor } from './applyHoverBGColor';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
  padding: 4px 6px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  
  width: 106px;

  font-size: 18px;
  
  ${applyColor};
  ${applyBgColor};
  ${applyHoverBGColor};
`;

export const Button = ({
  children,
  onClick,
  color,
  size = SizesButton.S,
  disabled,
  ...props
}) => (
  <StyledButton disabled={disabled} onClick={onClick} color={color} size={size} {...props}>{children}</StyledButton>
);
