import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const DetailComponents = ({productDetail}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(0)

  const decrement = () => {
    if(quantity > 0){
        setQuantity(quantity - 1)
    }
  }
  const increment = () => {
    if(productDetail?.rating?.count && quantity < productDetail.rating.count){
        setQuantity(quantity + 1)
    }
  }
  
  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity:quantity}))
  }

  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[700px] h-[500px]  ' src={productDetail?.image} alt={productDetail.title} />
        <div className=''>
        <div className='text-4xl font-bold'>{productDetail?.title}</div>
        <div className='my-2 text-2xl'>{productDetail?.description}</div>
        <div className='my-2 text-xl text-red-950'>Rating: {productDetail?.rating?.rate}</div>
        <div className='my-2 text-xl text-red-950'>Count: {productDetail?.rating?.count}</div>
        <div className='text-5xl font-bold'>Price: {productDetail?.price} <span className='text-sm'> TL</span> </div>
        <div className='flex items-center gap-5 my-4'>
            <div onClick={decrement} className='bg-red-950 text-white p-2 text-5xl'>-</div>
            <input type='text' value={quantity} className='w-12 text-center font-bold text-4xl' />
            <div onClick={increment} className='bg-red-950 text-white p-2 text-5xl'>+</div>
        </div>
        <div onClick={addBasket} className='my-4 w-[200px] border cursor-pointer h-16 flex items-center bg-gray-200  justify-center '>
            Add Basket
        </div>
        </div>
   
    </div>
  )
}

export default DetailComponents