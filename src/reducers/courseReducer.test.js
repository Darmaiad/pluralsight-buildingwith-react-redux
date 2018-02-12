import expect from 'expect';
import * as actions from '../actions/courseActions';
import courseReducer from './courseReducer';

const initialState = [
    { id: 'A', title: 'At' },
    { id: 'B', title: 'Bt' },
    { id: 'C', title: 'Ct' },
];

describe('Course Reducer', () => {
    it('Should add course when passed CREATE_COURSE_SUCCESS', () => {
        const newCourse = { title: 'C' };
        const action = actions.createCourseSuccess(newCourse);
        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(4);
        expect(newState[0].title).toEqual('At');
        expect(newState[1].title).toEqual('Bt');
        expect(newState[2].title).toEqual('Ct');
    });

    it('Should update a course when passed UPDATE_COURSE_SUCCESS', () => {
        const course = { id: 'C', title: 'A new title this time' };
        const action = actions.updateCourseSuccess(course);
        const newState = courseReducer(initialState, action);

        const updatedCourse = newState.find((c) => c.id === course.id);
        const untouchedCourse = newState.find((c) => c.id === 'A');

        expect(updatedCourse.title).toEqual('A new title this time');
        expect(untouchedCourse.title).toEqual('At');
        expect(newState.length).toEqual(3);
    });
});
