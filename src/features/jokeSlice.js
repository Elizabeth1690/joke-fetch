import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
  name: "joke",
  initialState: {
    joke: "",
    status: "idle",
    error: null,
  },
  reducers: {
    fetchJokeRequest: (state) => {
      state.status = "loading";
    },
    fetchJokeSuccess: (state, action) => {
      state.status = "succeeded";
      state.joke = action.payload;
    },
    fetchJokeFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchJokeRequest, fetchJokeSuccess, fetchJokeFailure } = jokeSlice.actions;
export default jokeSlice.reducer