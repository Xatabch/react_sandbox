import { fork } from 'redux-saga/effects';
import { loginFlow } from './authorize/index';
import { watchLog } from './logger/index';

export default function* rootSaga() {
    yield fork(loginFlow);
    yield fork(watchLog);
};
