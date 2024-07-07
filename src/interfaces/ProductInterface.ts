    export interface ProductInterface {
        id: number,
        title: string,
        description: string,
        imageSrc: string,
    }

    export interface ProductListInterface{
        products: ProductInterface[],
        index?: number,
    }