import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const fileName = __filename;
export interface Equipment {
  id: string;
  name: string;
  description: string;
}

interface EquipmentState {
  equipmentList: Equipment[];
  selectedEquipment: Equipment | null;
}

const initialState: EquipmentState = {
  equipmentList: [],
  selectedEquipment: null,
};

const equipmentSlice = createSlice({
  name: fileName,
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<Equipment[]>) => {
      state.equipmentList = action.payload;
    },
    add: (state, action: PayloadAction<Equipment>) => {
      state.equipmentList.push(action.payload);
    },
    update: (state, action: PayloadAction<Equipment>) => {
      const { id } = action.payload;
      const index = state.equipmentList.findIndex(
        (equipment) => equipment.id === id
      );
      if (index !== -1) {
        state.equipmentList[index] = action.payload;
      }
    },
    delete: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.equipmentList = state.equipmentList.filter(
        (equipment) => equipment.id !== id
      );
    },
    select: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.selectedEquipment =
        state.equipmentList.find((equipment) => equipment.id === id) || null;
    },
  },
});

export const actions = equipmentSlice.actions;

export default equipmentSlice.reducer;
