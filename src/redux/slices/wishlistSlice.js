import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //add to wishlist -when add to wishlist btn clicked in view
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },

        //remove wishlist- when delete btn clicked in wishlist
        removeWishlistItem:(state,action)=>{

            //need to store this new array in initial state, so return it
               return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist, removeWishlistItem}=wishlistSlice.actions
export default wishlistSlice.reducer