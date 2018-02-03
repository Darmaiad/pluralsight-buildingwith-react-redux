import { createStore, applyMiddleware } from 'redux';
// This middleware should check that process.env.NODE_ENV is set to development before it is applied
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';



export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant()) // check if ENV === DEV
    );
}