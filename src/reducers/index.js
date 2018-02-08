import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// Aliasing the courseReducer to courses inside combinereducers so that when we create a mapStateToProps that will want to pass
// that slice of the state, it will read: state.courses and not state.courseReducer
const rootReducer = combineReducers({
    courses, 
    authors,
    ajaxCallsInProgress,
});

export default rootReducer;
