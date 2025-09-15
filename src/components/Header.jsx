import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between w-full bg-violet-900 text-white text-xl font-semibold p-5 fixed'>
      <Link to={'/'}> <i className="fa-solid fa-truck-fast"></i> <span>Daily Cart</span></Link>

      <ul className='flex'>
        <li className='mx-1'><Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-500 me-1"></i>Wishlist<span className='bg-black rounded-full ms-1 p-1'>20</span></Link></li>
         <li className='mx-5'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping text-green-400 me-1"></i>Cart<span className='bg-black rounded-full ms-1 p-1'>10</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header