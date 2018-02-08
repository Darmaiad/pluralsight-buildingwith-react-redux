import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * We will put in place the convention that when an AJAX calls returns, the corresponding action 
 * will end with _SUCCESS. That way we can check in this Reducer whether the incoming action's name last 
 * 8 digits equal "_SUCCESS". That way we know that an AJAX call has returned successfully. 
 */

const actionTypeEndsInSuccess = (type) => type.substring(type.length - 8) == '_SUCCESS';

const ajaxStatusReducer = (state = initialState.ajaxCallsInProgress, action) => {
    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type == types.AJAX_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
};

export default  ajaxStatusReducer;