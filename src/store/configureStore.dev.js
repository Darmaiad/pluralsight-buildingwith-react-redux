import { createStore, applyMiddleware } from 'redux';
// This middleware should check that process.env.NODE_ENV is set to development before it is applied
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './../reducers/index';

const configureStore = (initialState) => createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger, reduxImmutableStateInvariant()) 
);

export default configureStore;
