// store.js
import { createStore, combineReducers } from 'redux';
import locationReducer from './reducer';

const rootReducer = combineReducers({
    location: locationReducer,
});

const store = createStore(rootReducer);

export default store;
