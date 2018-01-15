import { combineReducers } from 'redux';
import WindowReducer from './reducer_window';
import ShowMenuReducer from './reducer_showMenu';

const rootReducer = combineReducers({
    windowsize: WindowReducer,
    showMenu: ShowMenuReducer
});


export default rootReducer;