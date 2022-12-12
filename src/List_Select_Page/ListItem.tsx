import { IProduct } from '../interfaces/IProduct';
import "./list-item.scss"
import { colorFlavor } from '../helpers/colorFlavor';
import { useContext } from 'react';
import { contextRespProducts } from '../Providers/ProviderProducts';

interface props {
    product: IProduct;
}

export const ListItem = ({ product } : props) => {
    const { onChangeAmountProductArray } = useContext(contextRespProducts)
    const { amount, brand, category, flavor, size } = product

    return (
        <div className='list-item'>
            <p className='list-text list-brand'>{brand}</p>
            <p className='list-text list-flavor' style={{color: colorFlavor(flavor)}}>{flavor+" "+size}</p>
            <p className='list-text list-category'>{category}</p>
            <div>
                <p className='list-amount'>{amount}</p>
                <button 
                    className='list-btn-amount' 
                    onClick={()=>{onChangeAmountProductArray(product, 0)}}
                >
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>
        </div>
    )
}