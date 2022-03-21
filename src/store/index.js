import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createRootReducer } from '../reducers';
import { addDataToLocalStoreMiddleware } from './middleware/addDataToLocalStoreMiddleware'

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: createRootReducer(history),
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(addDataToLocalStoreMiddleware),
});
