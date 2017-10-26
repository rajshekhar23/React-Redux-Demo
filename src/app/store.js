import {createLogger} from 'redux-logger';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import planetReducer from './reducers/planetReducer';

const store = createStore(combineReducers({mathReducer, userReducer,planetReducer}), {}, applyMiddleware(createLogger()));

export default store;