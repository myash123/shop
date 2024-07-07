import { useState, useEffect } from "react";
import { ProductInterface } from "../interfaces/ProductInterface";
import { getProducts } from "../services/ProductService";

export const useProducts = () => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    useEffect(() => {
        const fetchedProducts = getProducts()
        setProducts(fetchedProducts);
    }, []);
    return products
}

export const useCardIndex = () => {
    const [cardIndex, setCardIndex] = useState(0);

    const incrementIndex = () => {
        setCardIndex(currentIndex => currentIndex + 1);
    };

    return { cardIndex, incrementIndex };
}

