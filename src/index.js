import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './Stores/reducers';
import rootSaga from './Sagas/index';

import App from './Containers/App/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
