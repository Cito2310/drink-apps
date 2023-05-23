import { IProduct } from '../interfaces/IProduct';
import "./list-item.scss"
import { colorFlavor } from '../helpers/colorFlavor';
import { useAppDispatch } from '../store';
import { startUpdateAmountById } from '../store/product';

interface props {
    product: IProduct;
}

export const ListItem = ({ product } : props) => {
    const { amount, brand, category, flavor, size } = product;
    const dispatch = useAppDispatch();

    const onAmountZero = () => {
        dispatch( startUpdateAmountById( product._id, 0 ) )
    }

    return (
        <div className='list-item'>
            <p className='list-text list-brand'>{brand}</p>
            <p className='list-text list-flavor' style={{color: colorFlavor(flavor)}}>{flavor+" "+size}</p>
            <p className='list-text list-category'>{category}</p>
            <div>
                <p className='list-amount'>{amount}</p>
                <button 
                    className='list-btn-amount' 
                    onClick={onAmountZero}
                >
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>
        </div>
    )
}