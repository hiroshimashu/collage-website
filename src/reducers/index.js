import { combineReducers } from 'redux';
import WindowReducer from './reducer_window';

const rootReducer = combineReducers({
    windowsize: WindowReducer
});


export default rootReducer;