import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "../features/jokeSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchJoke } from "../features/jokeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchJoke);

export default store;