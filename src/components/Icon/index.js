import React from 'react';

import sprite from './sprite.svg';

export const Icon = ({
  type,
  xmlns = 'http://www.w3.org/2000/svg',
  xmlnsXlink = 'http://www.w3.org/1999/xlink',
  viewBox = '0 0 16 16',
  width = '16px',
  height = '16px',
  fill = 'white',
  color = 'white',
  onClick,
  }) => (
    <svg
      onClick={onClick}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
      viewBox={viewBox}
      width={width}
      height={height}
      fill={fill}
      stroke={color}
    >
      <use xlinkHref={`${sprite}#${type}`}/>
    </svg>
  );
