import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* FlashGround */
  isFlashModalOpen: false,
  isSettingOpen: true,
  isDetailModalOpen: false,
  currentDetail: null,

  /* JukugoGround */
  isJukugoModalOpen: false,
  isJukugoDetailModalOpen: false,
  jukugoDetail: null,
  userInfo : null
};

const GeneralSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    /* FlashGround */
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

    /* JukugoGround */
    toggleJukugoModal: (state) => {
      state.isJukugoModalOpen = !state.isJukugoModalOpen;
    },
    toggleJukugoDetailModal: (state) => {
      state.isJukugoDetailModalOpen = !state.isJukugoDetailModalOpen;
    },
    setJukugoDetail: (state, action) => {
      state.jukugoDetail = action.payload;
    },
    setUserInfo : (state, action) => {
      state.userInfo = action.payload;
    }
  },
});

export const {
  /* FlashGround */
  toggleFlashModal,
  toggleSetting,
  toggleDetailModal,
  setCurrentDetail,
  setUserInfo,

  /* JukugoGround */
  toggleJukugoModal,
  toggleJukugoDetailModal,
  setJukugoDetail
} = GeneralSlice.actions;

export default GeneralSlice.reducer;
