import { ListItem } from "../components"
import { Product } from "../types"

interface props {
    products: Product[]
}

export const ListPage = ({ products }: props) => {
    return (

            
        <li className='py-6 px-14 bg-backgroundColor h-screen flex flex-col gap-2'>
            {
                products.map( product => (product.amount !== 0) 
                    ? <ListItem key={product._id} product={product} /> 
                    : null 
                )
            }
        </li>
    )
}