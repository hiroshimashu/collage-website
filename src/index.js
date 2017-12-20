import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import windowResize from './actions';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(ReactDOM.findDOMNode(this.about));

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root'));

window.addEventListener('resize', () => {
    store.dispatch(windowResize(window.innerWidth));
});

registerServiceWorker();
