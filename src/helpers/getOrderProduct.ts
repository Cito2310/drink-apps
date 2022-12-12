import { IProduct } from '../interfaces/IProduct';

export const getOrderProduct = (products: IProduct[]) => {
    const compare = ( a: IProduct, b: IProduct ) => {
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