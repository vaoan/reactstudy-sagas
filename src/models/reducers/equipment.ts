import { createSlice } from "@reduxjs/toolkit";

interface EquipmentState {
  // Define your state properties here
}

const initialState: EquipmentState = {
  // Set initial state values here
};

const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {
    // Define your reducer actions here
  },
});

export const { actions } = equipmentSlice;
export default equipmentSlice.reducer;
