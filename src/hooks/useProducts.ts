import { useState, useEffect } from "react";
import { ProductInterface, ProductListInterface } from "../interfaces/ProductInterface";
import { getProducts } from "../services/ProductService";
import { shiftCurrentProduct } from "../services/ProductService";

export const useProducts = () => {
    const [productList, setProductList] = useState<ProductListInterface>({ productList: [], index: 0 });

    useEffect(() => {
        const fetchedProducts: ProductInterface[] = getProducts();
        setProductList({ productList: fetchedProducts, index: 0 });
    }, []);

    const updateProductIndex = (shiftValue: number) => {
        setProductList(prevState => {
            const newIndex = shiftCurrentProduct(prevState.productList, prevState.index, shiftValue);
            return { ...prevState, index: newIndex };
        });
    };

    return { productList: productList.productList, index: productList.index, updateProductIndex };
};
