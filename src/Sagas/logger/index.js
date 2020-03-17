import { take, select } from 'redux-saga/effects';

export function* watchLog() {
    while(true) {
      const action = yield take('*');
      const state = yield select();
      
      console.log('ACTION: ', action);
      console.log('STATE: ', state);
    }
}