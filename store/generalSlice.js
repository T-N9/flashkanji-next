import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFlashModalOpen : false
};

const GeneralSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleFlashModal : (state) => {
        state.isFlashModalOpen = !state.isFlashModalOpen;
    }
  },
});

export const {
toggleFlashModal
} = GeneralSlice.actions;

export default GeneralSlice.reducer;
