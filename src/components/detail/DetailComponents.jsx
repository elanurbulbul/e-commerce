import React from 'react'

const DetailComponents = ({productDetail}) => {
  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[400px] f-[400px] ' src={productDetail?.image} alt={productDetail.title} />
        <div className='flex flex-col gap-2'>
        <div className='text-4xl font-bold'>{productDetail?.title}</div>
        <div className='my-2'>{productDetail?.description}</div>
        <div className=''>Rating: {productDetail?.rating?.rate}</div>
        <div className=''>Count: {productDetail?.rating?.count}</div>
        <div className='text-3xl'>Price: {productDetail?.price}
            <span className='text-sm'> TL</span>
        </div>

        </div>
   
    </div>
  )
}

export default DetailComponents