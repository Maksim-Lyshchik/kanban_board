import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { store } from './store';
import { Provider } from 'react-redux';
import { addTaskBacklog } from './action/task';
import { setLocalStore } from './store/middleware/addDataToLocalStoreMiddleware';

export const initialState = JSON.parse(localStorage.getItem('store'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window.onload = () => {
  if (!!Object.keys(initialState).length) {
    Object.values(initialState.tasks).forEach(task => {
      store.dispatch(addTaskBacklog({ ...task }));
    });
  }
};

window.onunload = () => {
  setLocalStore();
};
