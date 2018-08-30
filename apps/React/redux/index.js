import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable'; // defaults to localStorage for web and AsyncStorage for react-native

import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import history from '../history';
import saga from './saga';
import { moduleName } from '../ducks/profile';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)));

const persistedReducer = persistReducer(
  {
    // adds suport of immutable reducers
    transforms: [immutableTransform()],
    // uniq key to storage
    key: 'YOUR_APP',
    storage,
    // top level item in redux store to save
    whitelist: moduleName,
  },
  reducer
);

export default () => {
  const store = createStore(
    connectRouter(history)(persistedReducer),
    process.env.NODE_ENV === 'development' ? composeWithDevTools(enhancer) : enhancer
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(saga);
  return { store, persistor };
};
