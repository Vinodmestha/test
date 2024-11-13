// store.js
import { configStore } from 'redux';
import counterReducer from './reducer';

const store = configStore(counterReducer);
export default store;