import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFlashModalOpen: false,
  isSettingOpen: true,
  isDetailModalOpen: false,
  currentDetail: null,
};

const GeneralSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleFlashModal: (state) => {
      state.isFlashModalOpen = !state.isFlashModalOpen;
    },
    toggleSetting: (state) => {
      state.isSettingOpen = !state.isSettingOpen;
    },
    toggleDetailModal: (state) => {
      state.isDetailModalOpen = !state.isDetailModalOpen;
    },
    setCurrentDetail: (state, action) => {
      state.currentDetail = action.payload;
    },
  },
});

export const {
  toggleFlashModal,
  toggleSetting,
  toggleDetailModal,
  setCurrentDetail,
} = GeneralSlice.actions;

export default GeneralSlice.reducer;
