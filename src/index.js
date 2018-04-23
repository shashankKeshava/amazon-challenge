import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

import Reducer from "./reducers";
import initialState from './data'

const logger = createLogger({timestamp: true})

let store = createStore(Reducer, initialState, applyMiddleware(thunk, logger),
/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
