import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  box-sizing: border-box;

  height: 55px;
  width: 100%;
  
  padding: 0 20px;

  color: #FFFFFF;
  background-color: #0067A3;
`;

const StyledHeaderName = styled.p`
  font-size: 28px;
  line-height: 33px;
  
  margin: 0;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderName>Awesome Kanban Board</StyledHeaderName>
      <div>AVATAR</div>
    </StyledHeader>
  );
};
