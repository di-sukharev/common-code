import { put, call } from 'redux-saga/effects';
import { createRoutine } from 'redux-saga-routines';
import { handleActions } from 'redux-actions';
import { APP_NAME } from '../../../config';
import { getConfig as getConfigRequest } from '../../../api';

export const moduleName = 'config';
const prefix = `${APP_NAME}/${moduleName}`;

// Actions

export const getConfig = createRoutine(`${prefix}/GET_CONFIG`);

// Reducer

export const reducer = handleActions(
  {
    [getConfig.SUCCESS]: (state, { payload }) => payload,
  },
  {}
);

// Sagas

export function* getConfigSaga() {
  try {
    const config = yield call(getConfigRequest);
    yield put(getConfig.success(config));
  } catch (error) {
    yield put(getConfig.error(error));
  }
}
