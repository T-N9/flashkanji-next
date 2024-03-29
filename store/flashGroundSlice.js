import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kanji: [],
  isLoading: false,
  level: 5,
  selectedLevel: 'N5',
  selectedChapter: 1,
  selectedMultiChapters: [],
  searchValue: "",
  isFlippedMode: false,
  noChapters: Array.from(
    { length: 11 },
    (_, index) => index + 1
  ) /* no of chapters by Level */,
  isPaginated: true,
  isShuffledMode: false,
  shuffledData : [],
  kanjiPracticeData : []
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
    setKanji: (state, action) => {
      state.kanji = action.payload;
    },
    setSelectedMultiChapters: (state, action) => {
      state.selectedMultiChapters = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setIsFlippedMode: (state) => {
      state.isFlippedMode = !state.isFlippedMode;
    },
    setNoChapters: (state, action) => {
      state.noChapters = action.payload;
    },
    setIsPaginated: (state, action) => {
      state.isPaginated = action.payload;
    },
    setShuffleMode: (state, action) => {
      state.isShuffledMode = action.payload;
    },
    setShuffledData : (state, action) => {
      state.shuffledData = action.payload;
    },
    setKanjiPracticeData : (state, action) => {
      state.kanjiPracticeData = action.payload;
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
  setIsFlippedMode,
  setNoChapters,
  setIsPaginated,
  setShuffleMode,
  setShuffledData,
  setKanjiPracticeData
} = FlashGroundSlice.actions;

export default FlashGroundSlice.reducer;
