import { IProduct } from '../interfaces/IProduct';
import { Cards } from './Cards';

import "./card-section.scss"

interface props {
    products: IProduct[]
}

export const CardProductPage = ({ products }: props) => {
    return (
        <section id='card-section'>
            { products.map( product => <Cards product={product} key={product._id + "card"} />) }
        </section>
    )
}