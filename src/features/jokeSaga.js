import { call, put, takeLatest } from "redux-saga/effects";
import { fetchJokeRequest, fetchJokeSuccess, fetchJokeFailure } from "./jokeSlice";
import { fetchJoke } from "../api/jokeApi";

function* fetchJokeSaga(action) {
  try {
    const joke = yield call(fetchJoke, action.payload);
    yield put(fetchJokeSuccess(joke));
  } catch (error) {
    yield put(fetchJokeFailure(error.message));
  }
}

export function* watchFetchJoke() {
  yield takeLatest(fetchJokeRequest.type, fetchJokeSaga);
}