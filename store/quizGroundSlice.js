import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kanji: [],
  isLoading: false,
  level: 5,
  selectedLevel: "",
  selectedChapter: "",
  selectedMultiChapters : [],
  searchValue: ''
};

const QuizGroundSlice = createSlice({
  name: "quizGround",
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
} = QuizGroundSlice.actions;

export default QuizGroundSlice.reducer;
