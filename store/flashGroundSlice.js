import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kanji: [],
  isLoading: false,
  level: 5,
  selectedLevel: "",
  selectedChapter: "",
  selectedMultiChapters : [],
  searchValue: '',
  isFlippedMode: false
};

const FlashGroundSlice = createSlice({
  name: "flashGround",
  initialState,
  reducers: {
    setStartLoading: (state) => {
      state.isLoading = true;
    },
    setStopLoading: (state) => {
      state.isLoading = false;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
    setSelectedChapter: (state, action) => {
      state.selectedChapter = action.payload;
    },
    setKanji : (state, action) => {
        state.kanji = action.payload;
    },
    setSelectedMultiChapters : (state, action) => {
      state.selectedMultiChapters = action.payload;
    },
    setSearchValue : (state, action) => {
      state.searchValue = action.payload
    },
    setIsFlippedMode : (state) =>{
      state.isFlippedMode = !state.isFlippedMode;
    }
  },
});

export const {
  setStartLoading,
  setStopLoading,
  setLevel,
  setSelectedChapter,
  setSelectedLevel,
  setKanji,
  setSelectedMultiChapters,
  setSearchValue,
  setIsFlippedMode
} = FlashGroundSlice.actions;

export default FlashGroundSlice.reducer;
