import React from 'react';
import styled from 'styled-components';
import userAvatar from '../../image/user-avatar.jpg';

const StyledImg = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const Avatar = (sizes) => (
  <StyledImg
    src={userAvatar}
    sizes={sizes}
    alt='avatar'
  />
);
