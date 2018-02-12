import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from './../reducers/index';
import initialState from './../reducers/initialState';
import * as courseActions from '../actions/courseActions';

// This is more than a unit test, more of an integration test, as it will test the whole Redux funtionality
describe('Store', () => {
    it('Should handle creating courses', () => {
        // Same call as the one in the App's entry point
        const store = createStore(rootReducer, initialState);
        // Mock course
        const course = {title: 'Clean code'};

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // Actal result of what is now stored in the store
        const actual = store.getState().courses[0];
        const expected = { title: 'Clean code'};

        expect(actual).toEqual(expected);
        // We can write an array of actions and assert that the result is what it is expected
    });
});