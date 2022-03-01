import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';

const reducer = {
  calculator: calculatorReducer,
};

const store = configureStore({ 
  reducer,
  devTools: true, // ! remove for production
});

export default store;
