import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {

  const ourWishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  
  const dispatch=useDispatch()


  const handleCart=(product)=>{
    dispatch(removeWishlistItem(product?.id))
      dispatch(addToCart(product))
      const exisiting=userCart?.find(item=>item.id==product.id)
      if(exisiting)
      {
        alert("Product updated successfully")
      }
    }
  
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='mx-5 min-h-screen'>
      <h1 className='font-bold text-red-500 text-4xl m-5 text-center'>My Wishlist</h1>
      <div className="grid grid-cols-4 gap-4 m-5">
        {/* duplicate div according to the product array */}
       {
        ourWishlist?.length>0?
        ourWishlist?.map(product=>(
           <div className="rounded shadow p-2">
          <img height={'200px'} src={product?.thumbnail} alt="" />
          <div className='text-center'>
            <h3 className='font-bold text-xl'>{product?.title}</h3>
          <div className='flex justify-evenly text-xl my-6'>
              <button onClick={()=>dispatch(removeWishlistItem(product?.id))}><i class="fa-solid fa-heart-circle-minus text-red-500 cursor-pointer"></i></button>
             <button onClick={()=>dispatch(handleCart(product))}> <i class="fa-solid fa-cart-plus text-green-600 cursor-pointer "></i></button>
          </div>
          </div>
        </div>
        ))
        :
        <p className='font-bold text-3xl text-center'>Your Wishlist is Empty!!!</p>
       }
      </div>
    </div>
    </>
  )
}

export default Wishlist