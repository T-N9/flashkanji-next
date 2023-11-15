import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFlashModalOpen: false,
  isSettingOpen: true,
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
  },
});

export const { toggleFlashModal, toggleSetting } = GeneralSlice.actions;

export default GeneralSlice.reducer;
