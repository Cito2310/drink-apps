import { IProduct } from '../interfaces/IProduct';
import "./list-item.scss"

interface props {
    product: IProduct;
}

export const ListItem = ({ product } : props) => {
    const { amount, brand, category, flavor, size } = product

    return (
        <div className='list-item'>
            <p className='list-text list-brand'>{brand}</p>
            <p className='list-text list-flavor'>{flavor+" "+size}</p>
            <p className='list-text list-category'>{category}</p>
            <div>
                <p className='list-amount'>{amount}</p>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    )
}