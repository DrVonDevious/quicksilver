import { createSlice } from '@reduxjs/toolkit';

// A slice is a function from toolkit that combines the functionality
// of an action and a reducer into one
const canvasSlice = createSlice({
  name: "canvasSlice",
  initialState: {
    width: "1000px",
    height: "600px",
  },

  // actions are auto-generated by the creation of the reducers
  reducers: {
    resizeCanvas(state, action) {
      switch(action.payload) {
        case "lg":
          state.height = "600px";
          state.width = "1000px";
          break
        case "md":
          state.height = "500px";
          state.width = "800px";
          break
        case "sm":
          state.height = "400px";
          state.width = "640px";
          break
        case "mb":
          state.height = "500px";
          state.width = "300px";
          break
      }
    },
  }
});

export const { resizeCanvas } = canvasSlice.actions;
export default canvasSlice.reducer;
