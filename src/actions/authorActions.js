import authorApi from '../api/mockauthorApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export const loadAuthorsSuccess = (authors) => ({
    type: types.LOAD_AUTHORS_SUCCESS,
    authors,
});

export const loadAuthors = () => (dispatch) => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
    }).catch((error) => {
        throw (error);
    });
};
