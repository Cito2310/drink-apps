import { Cards } from './Cards';

import "./card-section.scss"
import { CardNewProduct } from './CardNewProduct';
import { Product } from '../types/product';

interface props {
    products: Product[]
}

export const CardProductPage = ({ products }: props) => {
    return (
        <section id='card-section'>
            { products.map( product => <Cards product={product} key={product._id + "card"} />) }
            <CardNewProduct/>
        </section>
    )
}