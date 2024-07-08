import { products } from '../constants/Products';
import { ProductListInterface } from '../interfaces/ProductInterface';

export const getProducts = () => {
    return products;
}

export const goToNextProduct = (products: ProductListInterface['products'], index: number) => {
    if (index + 1 < products.length) {
        return products[index + 1];
    }
    return null;
}