import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';
import initialState from './data';

const logger = createLogger({ timestamp: true });

let store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
