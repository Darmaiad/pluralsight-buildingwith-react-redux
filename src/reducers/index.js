import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// Aliasing the courseReducer to courses inside combinereducers so that when we create a mapStateToProps that will want to pass
// that slice of the state, it will read: state.courses and not state.courseReducer
const rootReducer = combineReducers({
    courses, 
    authors,
    ajaxCallsInProgress,
    toastr: toastrReducer,
    form: formReducer,
});

export default rootReducer;
