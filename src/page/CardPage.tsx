import { Cards } from '../components';
import { Product } from '../types';

interface props {
    products: Product[]
}

export const CardPage = ({ products }: props) => {
    return (
        <li className='flex flex-wrap gap-4 bg-backgroundColor p-8 md:p-4 sm:p-2 '>
            { products.map( product => (
                <Cards product={product} key={product._id + "card"} />
            ))}
        </li>
    )
}
