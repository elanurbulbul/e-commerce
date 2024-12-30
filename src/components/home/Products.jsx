import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products); //state altındaki products store.js den gelir
  
  console.log(products, "products");

  useEffect(() => { 
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className='flex flex-wrap justify-center '>
    {productsStatus === 'LOADING' && <Loading />}
    {
      products?.map((product,i) => (
        <Product key={i} product={product} />
      ))
    }
    </div>
  )
}

export default Products