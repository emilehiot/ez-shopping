import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/ProductsSlice';
import { Grid, Container, Card, Image, CardContainer, CardBody, CardButton, CardQuantity, CardPrice, CardCategory } from '../style/home';
import { addToCart } from '../reducers/CartSlice';

function home() {
    const [quantity, setQuantity] = useState("");

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

    const data = {
        id : products.id,
        title: products.title,
        image: products.image,
        description: products.description,
        price: products.price,
        // quantity: 
    }

    function handleAddToCart(product) {
        // dispatch(addToCart(product.image, product.title, product.description, product.price));
    }

    return (
        <div>
            <Navbar/>
            <Container>
                        <CardContainer>
                            {products.map((product, index) => (
                                <Card key={index}>
                                    <Image key={product.id} src={product.image} />
                                    <CardBody>
                                        <h3>{product.title} <CardCategory>{product.category}</CardCategory></h3>
                                        <p>{product.description}</p>
                                        <CardPrice>${product.price}</CardPrice>

                                        <div>
                                            <label htmlFor="quantity">Quantity :</label>
                                            <CardQuantity type="number" name="quantity" id="quantity" min="1" onChange={(e) => setQuantity(e.target.value)}/>
                                            <CardButton onClick={handleAddToCart(product)}>Add to basket</CardButton>
                                        </div>
                                    </CardBody>
                                </Card>
                                
                            ))}
                        </CardContainer>
            </Container>
        </div>
    )
}

export default home