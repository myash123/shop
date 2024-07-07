import { products } from '../constants/Products';
import { ProductListInterface } from '../interfaces/ProductInterface';

export const getProducts = () => {
    return products;
}

export const goToNextProduct = (productList: ProductListInterface, index: number) => {
    if(index + 1 < productList.products.length) {
        return productList.products[index + 1]
    }
}
