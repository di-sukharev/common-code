import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { moduleName as EXMPL_MODULE, reducer as EXMPL_REDUCER } from '../ducks/profile';


export default combineReducers({
  form,
  [EXMPL_MODULE]: EXMPL_REDUCER
});
