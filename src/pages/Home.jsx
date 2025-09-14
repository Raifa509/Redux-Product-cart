import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'
 
const Home = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchAllProducts())
    },[])


    const {loading,error, allProducts} = useSelector((state)=>state.productReducer)
    console.log(loading,error,allProducts);
    
    

  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='m-5 h-screen'>
      <div className="grid grid-cols-4 gap-4">
        {/* duplicate div according to the product array */}
        <div className="rounded shadow p-2">
          <img height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkt7FTr31VhEkM290Pq99sTClQieMynlQYw&s" alt="" />
          <div className='text-center'>
            <h3 className='font-bold text-xl'>Title</h3>
            <Link to={`/id/view`} className='bg-violet-900 p-2 rounded text-white mt-3 inline-block '>View More...</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home