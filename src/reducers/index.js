import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { tasks } from './task';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  tasks,
});
