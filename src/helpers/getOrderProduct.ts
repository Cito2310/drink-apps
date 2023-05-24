import { Product } from "../types"

export const getOrderProduct = (products: Product[]) => {
    const compare = ( a: Product, b: Product ) => {
        if ( a.location < b.location ) return -1
        if ( a.location > b.location ) return 1
        
        if ( a.brand < b.brand ) return -1
        if ( a.brand > b.brand ) return 1

        if ( a.flavor < b.flavor ) return -1
        if ( a.flavor > b.flavor ) return 1

        return 0;
    }
    return products.sort(compare)
}