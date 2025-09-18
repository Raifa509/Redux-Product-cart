import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'


const Header = ({insideHeader}) => {
  const dispatch=useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  return (
    <nav className='flex justify-between w-full bg-violet-900 text-white text-xl font-semibold p-5 fixed'>
      <Link to={'/'}> <i className="fa-solid fa-truck-fast"></i> <span>Daily Cart</span></Link>

      <ul className='flex'>
        
        {
          insideHeader && <li className='mx-1'><input type="text" onChange={e=>dispatch(searchProduct(e.target.value))}  className="border rounded text-sm px-2 py-1 me-2" placeholder='Search products here!!!' /></li>
        }

        <li className='mx-1'><Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-500 me-1"></i>Wishlist<span className='bg-black rounded-full ms-1 p-1'>{userWishlist?.length}</span></Link></li>
        <li className='mx-5'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping text-green-400 me-1"></i>Cart<span className='bg-black rounded-full ms-1 p-1'>{userCart?.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header