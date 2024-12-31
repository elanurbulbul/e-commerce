import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProduct } from '../redux/productSlice';

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {productDetail,productDetailStatus} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getDetailProduct(id));
    }, [dispatch, id]);
  return (
    <div>Detail</div>
  )
}
export default Detail;