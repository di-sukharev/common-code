import { Record, OrderedMap } from 'immutable';
import { createSelector } from 'reselect';
import { REQUEST_STATUS } from '../constants';

export const IsRequestLoadingCreateSelector = asyncDataSelector =>
  createSelector(asyncDataSelector, request => request.status === REQUEST_STATUS.REQUEST);
export const IsRequestSuccessCreateSelector = asyncDataSelector =>
  createSelector(asyncDataSelector, request => request.status === REQUEST_STATUS.SUCCESS);
export const IsRequestFailureCreateSelector = asyncDataSelector =>
  createSelector(asyncDataSelector, request => request.status === REQUEST_STATUS.FAILURE);

export const CreateSelectorGetData = reduxFieldSelector =>
  createSelector(reduxFieldSelector, asyncData => {
    const data = asyncData.get('data');
    return data ? data.toArray() : null;
  });

export const locationSelector = state => state.router.location;

export const AsyncData = Record({
  data: null,
  status: REQUEST_STATUS.NONE,
});

export const reducerTrigger = field => state =>
  state.setIn([field, 'status'], REQUEST_STATUS.REQUEST);
export const reducerFailure = field => state =>
  state.setIn([field, 'status'], REQUEST_STATUS.FAILURE);
export const reducerSuccess = field => (state, { payload }) => {
  const data = new OrderedMap(payload.map(item => [item.id, item]));
  return state.set(field, new AsyncData({ data, status: REQUEST_STATUS.SUCCESS }));
};
