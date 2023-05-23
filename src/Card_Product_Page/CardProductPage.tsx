import { Cards } from './Cards';
import { CardNewProduct } from './CardNewProduct';
import { Product } from '../types/product';

interface props {
    products: Product[]
}

export const CardProductPage = ({ products }: props) => {
    return (
        <section className='flex flex-wrap gap-4 bg-backgroundColor p-8'>
            { products.map( product => <Cards product={product} key={product._id + "card"} />) }
            <CardNewProduct/>
        </section>
    )
}