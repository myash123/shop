export interface ProductInterface {
    id: number,
    title: string,
    description: string,
    imageSrc: string,
}

export interface ProductListInterface{
    productList: ProductInterface[],
    index: number,
    updateProductIndex?: () => void,
}