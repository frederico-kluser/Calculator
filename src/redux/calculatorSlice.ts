import { item } from './../utils/itemBuilder';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateType } from '../types/item';

const initialState: initialStateType = {
  layers: [
    item('variable', 'x'),
    item('power', 2),
    item('operation', 'multiplication'),
    item('number', 3),
    item('operation', 'adition'),
    item('variable', 'd'),
    item('variable', 'x'),
    item('operation', 'adition'),
    item('absolute', [
      item('variable', 'x'),
    ]),
  ],
  nextValue: 'number', // when next is number, makes a highlight in the keyboard
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action) => {state.layers += action.payload},
  }
})

// actions
export const { add } = calculatorSlice.actions;

// selector
export const selectLayers = (state: any) => state.calculator.layers;

export default calculatorSlice.reducer;