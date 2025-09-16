import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //add to cart- when add to cart btn clicked from view and wishlist
        addToCart:(state,action)=>{
            //find the product is in state
            const existingProduct=state?.find(item=>item.id==action.payload.id)
            if(existingProduct){

                //increment quantity
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                
                //get remaining products otherthan exisiting
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

            }else{
                //add item to cart
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        }
    }
})

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer