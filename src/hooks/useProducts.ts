import { useState, useEffect } from "react";
import { ProductInterface, ProductListInterface } from "../interfaces/ProductInterface";
import { getProducts } from "../services/ProductService";
import { goToNextProduct } from "../services/ProductService";

export const useProducts = () => {
    const [productList, setProductList] = useState<ProductListInterface>({ productList: [], index: 0 });

    useEffect(() => {
        const fetchedProducts: ProductInterface[] = getProducts();
        setProductList({ productList: fetchedProducts, index: 0 });
    }, []);

    const updateProductIndex = () => {
        setProductList(prevState => {
            const nextIndex = goToNextProduct(prevState.productList, prevState.index);
            return { ...prevState, index: nextIndex };
        });
    };

    return { productList: productList.productList, index: productList.index, updateProductIndex };
};
