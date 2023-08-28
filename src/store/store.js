import { configureStore } from '@reduxjs/toolkit'
import products from './productSlice';
import carts from './cartSlice';

const store = configureStore({
  reducer: {
    products,
    carts
  },
})

export default store