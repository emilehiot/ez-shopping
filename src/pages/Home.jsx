import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/ProductsSlice';
import { Grid, Container, Card } from '../style/home';

function home() {
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector(state => state.products);
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
            <Container>
                    <Grid>
                        <div>
                            {products.map(product => (
                                <div key={product.id}>
                                    {product.title}
                                </div>
                            ))}
                        </div>
                    </Grid>
            </Container>
        </div>
    )
}

export default home