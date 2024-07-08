import { products } from '../constants/Products';
import { ProductInterface } from '../interfaces/ProductInterface';

export const getProducts = () => {
    return products;
}

export const goToNextProduct = (productList: ProductInterface[], index: number): number => {
    const nextIndex = index + 1 < productList.length ? index + 1 : index;
    return nextIndex;
}
