import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    // other reducers can be added here
});

const store = createStore(rootReducer);

export default store;
