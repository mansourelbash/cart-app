import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const cartsSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: []
  },
  reducers: {
    addToCart: (state,action) =>{
      const actionPayload = action.payload
      const selectID = state.carts.findIndex((item)=> item.id == action.payload.id)
      console.log(selectID)
      if(selectID >= 0){
        state.carts[selectID].quantity += 1
      }
      else{
        state.carts.push({...actionPayload, quantity: 1})
      }      


    },
    deleteFromCart: (state,action)=>{
      state.carts = state.carts.filter((product)=> product.id !== action.payload.id)
    },
    clearFromCart: (state,action)=>{
      state.carts = []
    }
  },
  extraReducers: () => {
  }
});

export const { addToCart, deleteFromCart, clearFromCart } = cartsSlice.actions;
export default cartsSlice.reducer;