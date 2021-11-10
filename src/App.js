import React from 'react';
import { BlockTasks } from './components/BlockTasks';

export const App = () => {
  return (
    <>
      <div>header</div>
      <div>
        <BlockTasks />
      </div>
      <div>footer</div>
    </>
  );
};
