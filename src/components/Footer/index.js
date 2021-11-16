import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  
  box-sizing: border-box;

  height: 55px;
  width: 100%;
  
  padding: 0 20px;

  color: #FFFFFF;
  background-color: #0067A3;
`;

const StyledInformBlock = styled.div`
  display: flex;
`;

const StyledFooterName = styled.p`
  font-size: 18px;
  line-height: 21px;
  
  margin: 0;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledInformBlock>
        <StyledFooterName>Active tasks: N</StyledFooterName>
        <StyledFooterName>Finished tasks: M</StyledFooterName>
      </StyledInformBlock>
      <StyledFooterName>Kanban board by NAME, YEAR</StyledFooterName>
    </StyledFooter>
  );
};
