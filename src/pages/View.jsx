import React from 'react'
import  Header from "../components/Header";
import { Link } from 'react-router-dom';


const View = () => {
  return (
    <>
    <Header/>
   <div className='mx-5 h-screen' style={{paddingTop:'100px'}}>
      <div className="grid grid-cols-2">
        <div className='flex justify-center items-center flex-col'>

        <img height={'250px'} width={'350px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznBTS5hxjRmQlfCiZkYdlKbS_u31E8Wszow&s" alt="" />
        <div className='w-full  flex justify-around'>
          <Link to={'/wishlist'} className='bg-blue-600 text-white p-3 rounded'>ADD TO WISHLIST</Link>
          <Link to={'/cart'} className='bg-green-600 text-white p-3 rounded'>ADD TO CART</Link>
        </div>
        </div>
        <div className='p-5'>
          <h1 className='text-4xl font-extrabold'>Essence Mascara Lash Princess</h1>
          <h3 className='text-3xl text-red-600 font-bold mt-3'>$9.99</h3>
          <div className='text-lg pt-3'>
            <p>Brand:Essence</p>
            <p>Category:beauty</p>
            <p><span className='font-bold'>Description</span>: The Essence Mascara lash Princess is a popular mascara known for its volumizing and lengthening effects.Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
            
            <p className='mt-4 font-bold'>Client Reviews</p>

            <div className='w-full border-2 border-gray-200 p-2 mt-2 '>
              <p><span className='font-bold'>Eleanor Collins</span> : Would not recommend!</p>
              <p>Rating : 3<i class="fa-solid fa-star text-yellow-300"></i></p>
            </div>

              <div className='w-full border-2 border-gray-200 p-2 mt-2 '>
              <p><span className='font-bold'>Eleanor Collins</span> : Very satisfued!</p>
              <p>Rating : 4<i class="fa-solid fa-star text-yellow-300"></i></p>
            </div>

              <div className='w-full border-2 border-gray-200 p-2 mt-2 '>
              <p><span className='font-bold'>Eleanor Collins</span> : Highly impressed!</p>
              <p>Rating : 5<i class="fa-solid fa-star text-yellow-300"></i></p>
            </div>


            </div>
         
        </div>
      </div>
   </div>
    </>
  )
}

export default View