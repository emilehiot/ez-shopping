import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/ProductsSlice';

function home() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar/>
        <div>
        {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
    </div>
  )
}

export default home