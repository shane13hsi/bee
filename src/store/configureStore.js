import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

let finalCreateStore;
let finalApplyMiddleware;

let logger;
if (__REDUX_LOGGER__) {
  const createLogger = require('redux-logger');
  logger = createLogger({
    level: 'info',
    collapsed: true
  });
  finalApplyMiddleware = applyMiddleware(thunk, logger);
} else {
  finalApplyMiddleware = applyMiddleware(thunk);
}

finalCreateStore = finalApplyMiddleware(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
