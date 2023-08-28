import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getData = createAsyncThunk("products/insertData",async (_, thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
    const response = await fetch('http://localhost:9000/products')
    const data = await response.json();
    return data
  }catch(error){
    rejectWithValue(error)
  }

})
const productsSlice = createSlice({
  name: 'product',
  initialState: {
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload
    })
  }
});

export default productsSlice.reducer;