import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [ READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE ] = createRequestActionTypes('post/READ_POST');

// 페이지 벗어날 때 데이터 비우는 액션
const UNLOAD_POST = 'post/UNLOAD_POST';

export const readPost = createAction(READ_POST, id => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createRequestSaga(READ_POST, postAPI.readPost);
export function* postSaga() {
    yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
    post: null,
    error: null,
};

const post = handleActions({
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
        ...state,
        post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
    }),
    [UNLOAD_POST]: () => (initialState)
}, initialState);

export default post;