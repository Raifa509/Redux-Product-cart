import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts=createAsyncThunk("products/fetchAllProducts",
    async ()=>{
        const response=await axios.get("https://dummyjson.com/products")
        // console.log(response.data.products);
        return response.data.products
        
    }
)


const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:false,
        error:""
    },
    reducers:{
        //synchronus action functions


    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state,action)=>{
            state.loading=true
            state.error=""
            state.allProducts=[]
        })
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.error=""
            state.allProducts=action.payload
        })
         builder.addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading=false
            state.error="API call failed!!!"
            state.allProducts=[]
        })
    }

})

export default productSlice.reducer