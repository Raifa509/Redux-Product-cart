import React, { useEffect, useState } from 'react'
import  Header from "../components/Header";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';


const View = () => {

  const userWishlist=useSelector(state=>state.wishlistReducer)

  const dispath=useDispatch()
  
  const {id} = useParams()
  // console.log(id);

  const [product,setProduct]=useState({})

  useEffect(()=>{

    const allProduct=JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProduct.find(item=>item.id==id))
  },[])
  
  // console.log(product);
  
  const handleAddToWishlist=()=>{
    //check product is in store wishlist
    const existingProduct=userWishlist?.find(item=>item.id==product.id)
    if(existingProduct)
    {
      alert("Product already exist in your wishlist....Add another!!!")
    }
    else{
      dispath(addToWishlist(product))
    }
  }



  
  return (
    <>
    <Header/>
   <div className='mx-5 h-screen' style={{paddingTop:'100px'}}>
      <div className="grid lg:grid-cols-2">
        <div className='flex justify-center items-center flex-col'>

        <img height={'250px'} width={'350px'} src={product?.thumbnail} alt="" />
        <div className='w-full  flex justify-around'>
          <button onClick={handleAddToWishlist} className='bg-blue-600 text-white p-3 rounded'>ADD TO WISHLIST</button>
          <button  className='bg-green-600 text-white p-3 rounded'>ADD TO CART</button>
        </div>
        </div>
        <div className='p-5'>
          <h1 className='text-4xl font-extrabold'>{product?.title}</h1>
          <h3 className='text-3xl text-red-600 font-bold mt-3'>${product?.price}</h3>
          <div className='text-lg pt-3'>
            <p>Brand : {product?.brand}</p>
            <p>Category : {product?.category}</p>
            <p><span className='font-bold'>Description</span> : {product?.description}</p>
            
            <p className='mt-4 font-bold'>Client Reviews</p>

           {
            product?.reviews?.length>0 ?
             product?.reviews?.map(item=>(
               <div className='w-full border-2 border-gray-200 p-2 mt-2 '>
              <p><span className='font-bold'>{item?.reviewerName}</span> : {item?.comment}</p>
              <p>Rating : {item?.rating}<i className="fa-solid fa-star text-yellow-300"></i></p>
            </div>

            ))
            :
            <p>No reviews yet!!</p>
           }
             


            </div>
         
        </div>
      </div>
   </div>
    </>
  )
}

export default View