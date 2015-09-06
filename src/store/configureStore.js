import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(
  thunk, logger
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
