import { all } from 'redux-saga/effects';
import { loginFlow } from './authorize/index';
import { watchLog } from './logger/index';

export default function* rootSaga() {
    return all([
        loginFlow(),
        watchLog()
    ])
};
