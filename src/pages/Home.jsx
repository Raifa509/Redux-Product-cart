import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])


  const { loading, error, allProducts } = useSelector((state) => state.productReducer)
  // console.log(loading, error, allProducts);


  const productsPerPage=8
  const totalPages=Math.ceil(allProducts?.length/productsPerPage)
  const [currentPage,setCurrentPage]=useState(1)
  const currentPageProductsLastIndex=currentPage * productsPerPage
  const currentPageProoductsFirstIndex=currentPageProductsLastIndex-productsPerPage
  const visibleProductCards=allProducts?.slice(currentPageProoductsFirstIndex,currentPageProductsLastIndex) 

  const navigatePrevPage=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

    const navigateNextPage=()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  return (
    <>
      <Header insideHeader={true}/>
      <div style={{ paddingTop: '100px' }} className='m-5 '>
        {
          loading ?
            <div className='flex justify-center items-center'>
              <img src="https://media.tenor.com/IfbOs_yh89AAAAAM/loading-buffering.gif" alt="" />
            </div> :
            <div className="grid grid-cols-4 gap-8">
              {/* duplicate div according to the product array */}
              {
                allProducts?.length > 0 ?
                  visibleProductCards.map(product => (
                    <div key={product?.id} className="rounded shadow p-2">
                      <img height={'200px'} src={product?.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className='font-bold text-xl'>{product?.title}</h3>
                        <Link to={`/${product?.id}/view`} className='bg-violet-900 p-2 rounded text-white mt-6 inline-block '>View More...</Link>
                      </div>
                    </div>
                  ))
                  :
                  <p className='text-center'>Products Not Found</p>
              }
            </div>
        }
      </div>

        {/* pagination */}
      <div className='text-center my-25 text-violet-900 text-2xl'>
          <button onClick={navigatePrevPage} className='cursor-pointer'><i className="fa-solid fa-backward"></i></button>
          <span className='mx-2'>{currentPage} of {totalPages}</span>
          <button onClick={navigateNextPage} className='cursor-pointer'><i className="fa-solid fa-forward"></i></button>

      </div>
    </>
  )
}

export default Home