import { useState, useEffect } from "react";
import { ProductInterface, ProductListInterface } from "../interfaces/ProductInterface";
import { getProducts } from "../services/ProductService";

export const useProducts = () => {
    const [productList, setProductList] = useState<ProductListInterface>({ productList: [], index: 0});
    useEffect(() => {
        const fetchedProducts: ProductInterface[] = getProducts()
        setProductList({ productList: fetchedProducts, index: 0 });
    }, []);
    return productList;
};

