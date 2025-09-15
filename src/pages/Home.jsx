import React, { useEffect } from 'react'
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



  return (
    <>
      <Header />
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
                  allProducts.map(product => (
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
    </>
  )
}

export default Home