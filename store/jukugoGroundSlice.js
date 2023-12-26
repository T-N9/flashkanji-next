import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jukugo: [],
  isLoading: false,
  isFlippedMode: false,
  isShuffledMode: false,
};

const JukugoGroundSlice = createSlice({
  name: "flashGround",
  initialState,
  reducers: {
    setStartLoading: (state) => {
      state.isLoading = true;
    },
    setStopLoading: (state) => {
      state.isLoading = false;
    },
    setJukugo: (state, action) => {
      state.jukugo = action.payload;
    },
    setIsFlippedMode: (state) => {
      state.isFlippedMode = !state.isFlippedMode;
    },
    setShuffleMode: (state, action) => {
      state.isShuffledMode = action.payload;
    },
  },
});

export const {
  setStartLoading,
  setStopLoading,
  setJukugo,
  setIsFlippedMode,
  setShuffleMode,

} = JukugoGroundSlice.actions;

export default JukugoGroundSlice.reducer;
