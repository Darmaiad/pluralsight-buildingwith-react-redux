import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// Thunk-specific imports
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

/*** Sync Action testing **/
describe('Sync Course Actions', () => {
    describe('createcoursesuccess', () => {
        it('Should create a CREATE_COURSE_SUCCESS ACTION', () => {
            const course = { id: 'a-course-id', title: 'A-course-title' };
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course,
            };

            const action = courseActions.createCourseSuccess(course);

            expect(action).toEqual(expectedAction);
        });
    });
});

/*** Thunk Action testing **/
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async-Thunk Course Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    // We pass a cb function 'done' to mocha. Call this function when async work is done
    it('Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        // Example with nock:
        // nock('http://example.com') // nock intercepts this URL call, and returns mock data instead
        //  .get(/courses) 
        //  .reply(200, {course: [{id: 1, firstName: 'Cory'}]}) 

        const expectedActions = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.LOAD_COURSES_SUCCESS, body: { courses: [{ id: 'clean-code', title: 'Clean Code' }] } },
        ];

        // Create store with an initial state and the expected actions
        const store = mockStore({ courses: [] }, expectedActions);

        // Dispatch from store
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done(); // Callback we defined above. Tells mocha we are done with async
        });
    });
});
