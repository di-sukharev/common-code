import { all, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import { getConfigSaga } from '../ducks/config';

// combine all saga listeners, enter point for all business logic (saga map);

// runs when app start
const initSaga = function* saga() {
  yield all([EXMPL_OF_INIT_SAGA(), ...()]);
};

const EXMPL_WRAP_SAGA = function* saga() {
  yield all([
    takeEvery(EXMPL_ACTION.TRIGGER, EXMPL_SAGA),
  ]);
};

export default function*() {
  yield fork(EXMPL_WRAP_SAGA);
}
