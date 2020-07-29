import { createSelector } from 'reselect';
import { Record } from 'immutable';

// CONSTANTS

export const REQUEST_STATUS = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  DONE: 'DONE',
};

// RECORDS

export const AsyncData = Record({
  data: null,
  status: REQUEST_STATUS.NONE,
  error: null,
});

// SELECTORS

export const IsRequestLoadingSelector = asyncDataSelector =>
  createSelector(
    asyncDataSelector,
    ({ status }) => status === REQUEST_STATUS.PENDING
  );
export const IsRequestDoneSelector = asyncDataSelector =>
  createSelector(
    asyncDataSelector,
    ({ status }) => status === REQUEST_STATUS.DONE
  );
export const IsRequestFailedSelector = asyncDataSelector =>
  createSelector(
    asyncDataSelector,
    ({ status }) => status === REQUEST_STATUS.FAILURE
  );
export const IsRequestSuccessSelector = asyncDataSelector =>
  createSelector(
    asyncDataSelector,
    ({ status }) => status === REQUEST_STATUS.SUCCESS
  );
