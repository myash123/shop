import { Container } from '@mui/material';
import { getProducts } from '../../services/ProductService';
import { ProductInterface } from '../../../../interfaces/ProductInterface';
import { useEffect, useState } from 'react';

const ProductImage = () => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    useEffect(() => {
        const fetchedProducts = getProducts()
        setProducts(fetchedProducts);
        console.log(products);
    }, []);

    return (
    <Container>
        {products.length > 0 ? (
            <img src={products[0].imageSrc} alt="Product image" />
        ) : (
            <p>No product images available.</p>
        )}
    </Container>
    );
}

export default ProductImage
