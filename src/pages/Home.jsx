import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/ProductsSlice';

function home() {
  const dispatch = useDispatch();
  const { products, isLoading} = useSelector(state => state.products);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>error</div> ;
  }

  return (
    <div>
        <Navbar/>
        <div>
        {/* {products.map(product => (
        <img key={product.id} src={product.image}/>
      ))} */}
    </div>
    </div>
  )
}

export default home