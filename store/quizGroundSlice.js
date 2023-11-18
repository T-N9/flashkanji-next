import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kanji: [],
  isLoading: false,
  level: 5,
  selectedLevel: "",
  selectedChapter: "",
  selectedMultiChapters : [],
  currentMark : 0,
  answeredCount : 0,
  selectedMode : 1
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
    },
    increaseMark : (state) => {
      state.currentMark = state.currentMark +1;
    },
    decreaseMark : (state) => {
      state.currentMark = state.currentMark -1;
    },
    resetQuizState : (state) => {
      state.currentMark = 0;
      state.answeredCount = 0;
    }
    ,
    increaseAnsweredCount : (state) => {
      state.answeredCount = state.answeredCount + 1;
    },
    setQuizMode : (state, action) => {
      state.selectedMode = action.payload;
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
  increaseMark, 
  decreaseMark,
  resetQuizState,
  increaseAnsweredCount,
  setQuizMode
} = QuizGroundSlice.actions;

export default QuizGroundSlice.reducer;
