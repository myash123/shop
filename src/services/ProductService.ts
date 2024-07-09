import { products } from '../constants/Products';
import { ProductInterface } from '../interfaces/ProductInterface';

export const getProducts = () => {
    return products;
}

export const shiftCurrentProduct = (productList: ProductInterface[], index: number, shiftValue: number): number => {
    if (shiftValue && index + 1 < productList.length) {
        return index + 1;
    } else if (shiftValue === -1 && index - 1 > productList.length) {
        return index - 1;
    } else {
        return 0;
    }
}
