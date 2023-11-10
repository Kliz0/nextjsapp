'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ListState {
  list: string[];
}

const initialState: ListState = {
  list: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
      // onClick={() => dispatch(addList(string))}
    },
    removeList: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
      // onClick={() => dispatch(removeList(index))}
    },
    editList: (state, action: PayloadAction<{ index: number; newValue: string }>) => {
      const { index, newValue } = action.payload;
      state.list[index] = newValue;
      // onClick={() => dispatch(editList(index, newValueString))}
    },
  },
});

export const { addList, removeList, editList } = listSlice.actions;

export default listSlice.reducer;