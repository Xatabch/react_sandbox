import MockApi from '../../Services/mockAPI';
import { put, cancelled, fork, take, cancel, call, all, race } from 'redux-saga/effects';

export function* authorize(user, password) {
    try {
        // const token = yield call(MockApi.authorize, user, password);
        const token = yield race([
            call(MockApi.authorize, user, password, 3000),
            call(MockApi.authorize, 'Maria', '123', 2000)
        ]);
        yield put({type: 'LOGIN_SUCCESS', token});
        yield call(MockApi.storeItem, {token});
        return token;
    } catch (error) {
        yield put({type: 'LOGIN_ERROR', error});
    } finally {
        if (yield cancelled()) {
            yield put({type: 'RESET_LOGIN_PENDING'});
        }
    }
};

export function* loginFlow() {
    while(true) {
        const {user, password} = yield take('LOGIN_REQUEST');
        const task = yield fork(authorize, user, password);
        
        const action = yield take(['LOGOUT', 'LOGIN_ERROR']);
        if (action.type === 'LOGOUT') {
            yield cancel(task);
        }

        yield call(MockApi.clearItem);
    }
}
