import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice';

const Cart = () => {

  const userCart = useSelector(state => state.cartReducer)
  const [totalCart,setTotalCart]=useState(0)

  //navigate hook
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
    if(userCart?.length>0)
    {
      setTotalCart(Math.ceil(userCart?.map(item=>item.totalPrice)?.reduce((prev,curr)=>prev+curr)))
    }
  },[userCart])


  const handleDelete=(id)=>{
      dispatch(removeCartItem(id))
  }

  const handleDecrementQuantity=(product)=>{
    if(product?.quantity>1)
    {
      dispatch(decrementQuantity(product.id))
    }
    else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkout=()=>{
    dispatch(emptyCart())
    alert("Your order has been confirmed...Thank you for shopping with us!!!")
    navigate('/')
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='mx-5 h-screen'>
        <h1 className='font-bold text-blue-700 text-4xl my-7 mx-5'>Cart Summary</h1>

        {
          userCart?.length > 0 ?

            <div className="grid grid-cols-3 gap-4 ">
              {/* table */}
              <div className="col-span-2 shadow rounded p-5">
                <table className='table-auto w-full'>
                  <thead>
                    <tr>
                      <td className="font-semibold">#</td>
                      <td className="font-semibold">Name</td>
                      <td className="font-semibold">Image</td>
                      <td className="font-semibold">Quantity</td>
                      <td className="font-semibold">Price</td>
                      <td className="font-semibold">...</td>
                    </tr>
                  </thead>

                  <tbody>
                    {/* duplicating according to cart array */}

                    {
                      userCart?.map((item,index)=>
                          <tr>
                      <td>{index+1}</td>
                      <td><Link to={`/${item?.id}/view`} className='text-blue-500 underline'>{item?.title?.slice(0,25)}...</Link></td>
                      <td><img src={item?.thumbnail} alt="" width={'70px'} height={'70px'} /></td>
                      <td>
                        <div className="flex">
                          <button onClick={()=>handleDecrementQuantity(item)} className="font-bold cursor-pointer">–</button>
                          <input type="text" style={{ width: '40px' }} className='border p-1 rounded mx-1 text-center' value={item?.quantity} readOnly />
                          <button onClick={()=>dispatch(incrementQuantity(item?.id))} className="font-bold cursor-pointer">+</button>
                        </div>

                      </td>
                      <td>$ {item?.totalPrice}</td>
                      <td>
                        <button onClick={()=>handleDelete(item?.id)} className="i fa-solid fa-trash text-red-500 cursor-pointer"></button>
                      </td>
                    </tr>
                      )
                    }
                  </tbody>
                </table>
                <div className="float-right mt-4">
                  <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 text-white text-sm px-2 py-1 me-2 rounded cursor-pointer">EMPTY CART</button>
                  <Link to={'/'}><button className="bg-blue-600 text-white text-sm px-2 py-1 rounded cursor-pointer">SHOP MORE</button></Link>

                </div>


              </div>
              {/* total */}

              <div className="col-span-1 shadow rounded p-5">
                <h2 className='font-bold text-2xl mb-4'>Total Amount : <span className='text-red-600'>$ {totalCart}</span></h2>
                <hr />
                <button onClick={checkout} className='bg-green-500 text-white w-full mt-5 p-2 rounded shadow cursor-pointer'>CHECK OUT</button>
              </div>
              <div>

              </div>
            </div>
            :

            <p>Your Cart is empty</p>
        }
      </div>

    </>
  )
}

export default Cart