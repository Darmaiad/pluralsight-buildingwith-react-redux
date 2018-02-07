import authorApi from '../api/mockauthorApi';
import * as types from './actionTypes';

export const loadAuthorsSuccess = (authors) => ({
    type: types.LOAD_AUTHORS_SUCCESS,
    authors,
});

export const loadAuthors = () => (dispatch) =>
    authorApi.getAllAuthors().then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
    }).catch((error) => {
        throw (error);
    });
