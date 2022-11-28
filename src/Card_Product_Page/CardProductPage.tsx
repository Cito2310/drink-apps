import { IProduct } from '../interfaces/IProduct';

interface props {
    products: IProduct[]
}

export const CardProductPage = ({ products }: props) => {
    return (
        <>
            { products.map( product => <h1>{JSON.stringify(product)}</h1>) }
        </>
    )
}