import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='mx-5 h-screen'>
      <h1 className='font-bold text-red-500 text-4xl m-5 text-center'>My Wishlist</h1>
      <div className="grid grid-cols-4 gap-4 m-5">
        {/* duplicate div according to the product array */}
        <div className="rounded shadow p-2">
          <img height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkt7FTr31VhEkM290Pq99sTClQieMynlQYw&s" alt="" />
          <div className='text-center'>
            <h3 className='font-bold text-xl'>Title</h3>
          <div className='flex justify-evenly text-xl'>
              <button><i class="fa-solid fa-heart-circle-minus text-red-500 me-10"></i></button>
             <button> <i class="fa-solid fa-cart-plus text-green-600 ms-10"></i></button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Wishlist