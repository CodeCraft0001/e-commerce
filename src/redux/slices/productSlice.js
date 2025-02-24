import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { build } from "vite";

export const fetchProduct = createAsyncThunk('productslice/fetchProduct', async()=> {
    const response = await axios.get('https://dummyjson.com/products')
    localStorage.setItem('products',JSON.stringify(response.data.products))
    return response.data.products
})

const productSlice = createSlice({
    name : 'productslice',
    initialState : {
        product : [],
        loading : false,
        error : ''
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProduct.pending,(state,action)=> {
            state.loading = true
        }),
        builder.addCase(fetchProduct.fulfilled,(state,action)=> {
            state.loading = false
            state.product = action.payload 
        }),
        builder.addCase(fetchProduct.rejected,(state,action)=> {
            state.product = []
            state.error = 'API fetching Failed !'
            state.loading = false
        })
    }
})

export default productSlice.reducer