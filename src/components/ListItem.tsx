import { useAppDispatch, startAmountToZero } from '../store';
import { Product } from '../types/';

interface props {
    product: Product;
}

export const ListItem = ({ product } : props) => {
    const { amount, brand, category, flavor, size } = product;
    const dispatch = useAppDispatch();

    const onAmountZero = () => {
        dispatch( startAmountToZero( product ) )
    }

    return (
        <li className='
            bg-card_bg
            grid grid-cols-[2fr_2fr_1fr_3em]
            rounded-md
            items-center
            uppercase
            px-6
            shadow-md
            gap-2
            sm:text-sm
            md:px-4
            sm:px-3
        '>
            <p>{ brand }</p>
            <p>{ `${ flavor } ${ size }` }</p>
            <p>{ category }</p>

            <div className='items-center flex justify-between'>
                <p className='text-xl'>{ amount }</p>
                <button 
                    className='text-3xl transition-base text-card_btn brightness-90 hover:brightness-75' 
                    onClick={ onAmountZero }
                >
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>
        </li>
    )
}