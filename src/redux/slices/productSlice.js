import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts=createAsyncThunk("products/fetchAllProducts",
    async ()=>{
        const response=await axios.get("https://dummyjson.com/products")
        // console.log(response.data.products);

        sessionStorage.setItem("allProducts",JSON.stringify(response.data.products))

        return response.data.products
        
    }
)


const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:true,
        error:""
    },
    reducers:{
        //synchronus action functions
        searchProduct:(state,action)=>{
            state.allProducts=state.dummyAllProducts?.filter(item=>item?.title.toLowerCase().includes(action.payload.toLowerCase()))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state,action)=>{
            state.loading=true
            state.error=""
            state.allProducts=[]
            state.dummyAllProducts=[]
        })
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.error=""
            state.allProducts=action.payload
            state.dummyAllProducts=action.payload
        })
         builder.addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading=false
            state.error="API call failed!!!"
            state.allProducts=[]
            state.dummyAllProducts=[]
        })
    }

})

export const {searchProduct}=productSlice.actions
export default productSlice.reducer