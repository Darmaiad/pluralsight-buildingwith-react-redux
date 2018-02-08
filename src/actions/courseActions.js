import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';
import { ajaxCallError } from './ajaxStatusActions';

export const loadCoursesSuccess = (courses) => ({
    type: types.LOAD_COURSES_SUCCESS,
    courses,
});

export const createCourseSuccess = (course) => ({
    type: types.CREATE_COURSE_SUCCESS,
    course,
});

export const updateCourseSuccess = (course) => ({
    type: types.UPDATE_COURSE_SUCCESS,
    course,
});

export const loadCourses = () => (dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
        .then((courses) => {
            dispatch(loadCoursesSuccess(courses));
        }).catch((error) => {
            throw (error);
        });
};

export const saveCourse = (course) => (dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then((savedCourse) => {
        course.id ? dispatch(updateCourseSuccess(savedCourse)) : // If there is a course id We are updating a course and we dispatch update 
            dispatch(createCourseSuccess(savedCourse)); // If there is no course id the course is new, so we dispatch create
    }).catch((error) => {
        dispatch(ajaxCallError());
        throw (error);
    });
};
