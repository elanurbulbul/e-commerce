import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProduct } from '../redux/productSlice';
import DetailComponents from '../components/detail/DetailComponents';
import Loading from '../components/Loading';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  return (
    <div>
      {
      productDetailStatus === "LOADING" ? <Loading />
      : 
      <DetailComponents productDetail={productDetail} />
      }
    </div>
  )
}
export default Detail;