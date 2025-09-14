import React from 'react'
import { Link } from "react-router-dom";

const Pnf = () => {
  return (
    <>

      <div className='flex justify-center items-center flex-col h-screen'>
        <img src="./404.gif" alt="" width={'500px'}/>
        <h3 className='text-xl '>Look like you're lost</h3>
        <h5 className='text-sm'>the page you are looking for not available</h5>
        <Link to={'/'}>
          <button className="bg-violet-900 text-white p-2 rounded mt-3">Go to Home</button>

        </Link>    
        </div>

    </>
  )
}

export default Pnf