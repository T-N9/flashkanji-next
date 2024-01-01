import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jukugo: [],
  isLoading: false,
  isFlippedMode: false,
  isShuffledMode: false,
  selectedLevel: 'N3',
  selectedChapter: 1,
  noChapters: Array.from(
    { length: 42 },
    (_, index) => index + 1
  ),
  level : 3
};

const JukugoGroundSlice = createSlice({
  name: "jukugoGround",
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
    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
    setSelectedChapter: (state, action) => {
      state.selectedChapter = action.payload;
    },
    setNoChapters: (state, action) => {
      state.noChapters = action.payload;
    },
    setIsPaginated: (state, action) => {
      state.isPaginated = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const {
  setStartLoading,
  setStopLoading,
  setJukugo,
  setIsFlippedMode,
  setShuffleMode,
  setSelectedChapter,
  setSelectedLevel,
  setIsPaginated,
  setNoChapters,
  setLevel
} = JukugoGroundSlice.actions;

export default JukugoGroundSlice.reducer;
