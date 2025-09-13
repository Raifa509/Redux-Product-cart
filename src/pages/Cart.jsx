import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';


const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='mx-5 h-screen'>
        <h1 className='font-bold text-blue-700 text-4xl my-7 mx-5'>Cart Summary</h1>
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
                <tr>
                  <td>1</td>
                  <td>title</td>
                  <td><img src="" alt="" width={'70px'} height={'70px'} /></td>
                  <td>
                    <div className="flex">
                      <button className="font-bold cursor-pointer">–</button>
                      <input type="text" style={{ width: '40px' }} className='border p-1 rounded mx-1 text-center' value={10} readOnly />
                      <button className="font-bold cursor-pointer">+</button>
                    </div>
                  </td>
                  <td>$ 400</td>
                  <td>
                    <button className="i fa-solid fa-trash text-red-500 cursor-pointer"></button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="float-right mt-4">
              <button className="bg-red-600 text-white text-sm px-2 py-1 me-2 rounded cursor-pointer">EMPTY CART</button>
              <Link to={'/'}><button className="bg-blue-600 text-white text-sm px-2 py-1 rounded cursor-pointer">SHOP MORE</button></Link>

            </div>


          </div>
          {/* total */}

          <div className="col-span-1 shadow rounded p-5">
            <h2 className='font-bold text-2xl mb-4'>Total Amount : <span className='text-red-600'>$ 500</span></h2>
            <hr />
            <button className='bg-green-500 text-white w-full mt-5 p-2 rounded shadow cursor-pointer'>CHECK OUT</button>
          </div>
          <div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Cart