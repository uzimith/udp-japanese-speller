import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';

import reducer from '../reducers/index';

let middleware = [thunk];

let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(...middleware)(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
}

function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);
    return store;
}

export default configureStore;

