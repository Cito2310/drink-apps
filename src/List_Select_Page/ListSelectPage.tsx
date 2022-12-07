import { IProduct } from '../interfaces/IProduct';

import "./list-section.scss"
import { ListItem } from './ListItem';

interface props {
    products: IProduct[]
}

export const ListSelectPage = ({ products }: props) => {
    return (
        <section id='list-section'>
            {products.map( product => <ListItem key={product._id} product={product} />)}
        </section>
    )
}