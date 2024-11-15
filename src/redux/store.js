import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterslice';
import cartReducer from './slices/cartslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});