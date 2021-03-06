import { createSlice } from '@reduxjs/toolkit';

// A slice is a function from toolkit that combines the functionality
// of an action and a reducer into one
const codeSlice = createSlice({
  name: "codeSlice",
  initialState: {
    componentName: "Untitled",
    codeState: false,
    mode: "html",
    css: "",
    html: "",
    js: ""
  },

  // actions are auto-generated by the creation of the reducers
  reducers: {
    updateCSS(state, action) { state.css = action.payload },
    updateHTML(state, action) { state.html = action.payload },
    updateJS(state, action) { state.js = action.payload },
    toggleCode(state, action) { state.codeState = !state.codeState },
    setMode(state, action) { state.mode = action.payload },
    setName(state, action) { state.componentName = action.payload },
    resetCode(state, action) {
      state.codeState = false;
      state.css = "";
      state.html = "";
      state.js = ""
    },
  }
});

export const {
  toggleCode,
  setMode,
  updateCSS,
  updateHTML,
  updateJS,
  resetCode,
  setName,
} = codeSlice.actions;
export default codeSlice.reducer;

