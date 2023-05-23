import { IProduct } from '../interfaces/IProduct';

import { ListItem } from './ListItem';

interface props {
    products: IProduct[]
}

export const ListSelectPage = ({ products }: props) => {
    return (
        <section className='py-6 px-14 bg-backgroundColor h-screen flex flex-col gap-2'>
            {products.map( product => (product.amount !== 0) ? <ListItem key={product._id} product={product} /> : null )}
        </section>
    )
}