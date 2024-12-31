import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='w-[400px]  mb-2 mx-2 p-3 border rounded-md relative cursor-pointer'>
        <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1 '>{product.price}</div>
        <img src={product?.image} alt={product.title} className='m-auto w-[300px] h-[300px]' />
        <div className='text-center'>
            <h1 className='text-xl font-bold'>{product.title}</h1>
        </div>
    </div>
  )
}

export default Product