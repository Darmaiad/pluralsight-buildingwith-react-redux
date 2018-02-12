import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// Sync Action testing
describe('Course Actions', () =>{
    describe('createcoursesuccess', () =>{
        it('Should create a CREATE_COURSE_SUCCESS ACTION', () => {
            const course = {id: 'a-course-id', title: 'A-course-title'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course,
            };

            const action = courseActions.createCourseSuccess(course);

            expect(action).toEqual(expectedAction);
        });
    });
});