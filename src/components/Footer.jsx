import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' p-10  h-80 font-semibold bg-violet-900 text-white'>
  <div className='flex justify-between'>
        <div style={{width:'400px'}}>
          <h2 className=' text-xl font-bold py-2'><i className="fa-solid fa-truck-fast me-2"></i>Daily cart</h2>
          <p>Designed and built with all the love in the world
          by  the Luminar
            team with the help of our <br /> contributors. <br />
            Code licensed Luminar,docs CC BY 3.0.
            <br />
            Currently v5.3.2.
          </p>
        </div>
  
        <div className='cursor-pointer'>
        <h2 className=' text-xl font-bold py-2'>Links</h2>
        <Link to={'/'}><p>Landing Page</p></Link>
        <Link to={'/wishlist'}><p>Wishlist Page</p></Link>
        <Link to={'/cart'}><p>Cart Page</p></Link>
  
        </div>
  
        <div className='cursor-pointer'>
        <h2 className=' text-xl font-bold py-2 '>Guides</h2>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>React Router</p>
        </div>
  
        <div>
        <h2 className=' text-xl font-bold py-2'>Contact Us</h2>
        <div>
          <input type="text" className="border p-1 rounded bg-white placeholder-gray-400 me-2" placeholder="Enter your Email  here"  />
         <i className="fa-solid fa-arrow-right"></i>
        </div>
          <div className='flex justify-between my-4 cursor-pointer'>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
           <i className="fa-solid fa-phone"></i>
          </div>
        </div>
  </div>

      <div className='flex items-center text-sm justify-center mt-14'>
        <p>Copyright @ May 2025 Batch, Daily cart .Build with React Redux</p>
      </div>
    </footer>
  )
}

export default Footer