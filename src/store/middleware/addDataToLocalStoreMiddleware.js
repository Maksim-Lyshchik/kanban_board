import { store } from '../index';
import { throttle } from '../../helpers/throttle';
import { periodUpdateLocalStorage } from '../../constants/periodUpdateLocalStorage';

export const setLocalStore = () => localStorage.setItem('store', JSON.stringify(store.getState()));

export const addDataToLocalStoreMiddleware = () => next => action => {
  const result = next(action);
  const throttleLocalStore = throttle(setLocalStore, periodUpdateLocalStorage);

  throttleLocalStore();

  return result;
};
