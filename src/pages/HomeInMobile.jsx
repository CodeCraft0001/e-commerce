import React from 'react'
import { addToCart } from '../redux/slices/cartSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function HomeInMobile() {

  const [qties, setQties] = useState({})

  const dispatch = useDispatch()
    const {loading, product, error} = useSelector((state)=> state.productSlice)
    console.log(loading,product);

  const handleIncreaseQty =(item)=>{
      dispatch(addToCart({...item, quantity: qties[item.id] || 1}))
      updateQty(item.id,1)
    }

    const updateQty =(id, value) => {
      setQties((prev)=>({
        ...prev,[id]:Math.max(1,(prev[id] || 1)+value) //
      }))
    }

  return (
    <div>
      {
        loading ? 
        <h2>Loading...</h2>
        :

        <div className='row'>
        {
          product.length > 0 ?
          product.map(item=>(
            <div className='row'>
              <span className='text-danger'>Quantity :</span>
              <div className='col-sm-4 col-md-2 '><button className='w-100 btn btn-light' onClick={()=>handleIncreaseQty(item)} >+</button></div>
              <div className='col-sm-4 col-md-8 '><input type="" value={qties[item.id] || 1} readOnly className='w-100 btn text-dark' /></div>
              <div className='col-sm-4 col-md-2 '><button className='w-100 btn btn-light' onClick={()=>updateQty(item.id,-1)} >-</button></div>
            </div>
          ))
          :
          <h4>{error}</h4>
        }
      </div>

  
    
    } 
    </div>
  )
}

export default HomeInMobile
