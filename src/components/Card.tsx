import { useState } from 'react';
import { useCountdown } from '../hooks';
import { useAppDispatch, setCurrentModal, startUpdateAmountById } from '../store';
import { Product } from '../types';
import { getUrlCardImageWithBrand } from '../helpers';

interface props {
    product: Product
}

export const Card = ( { product }: props ) => {
    const { brand, flavor, location, size, category } = product;
    const dispatch = useAppDispatch()
    
    const [amount, setAmount] = useState<number>(product.amount);
    
    const startCountdown = useCountdown( 800, 
        async() => dispatch( startUpdateAmountById( product._id, amount ) )
    );

    const changePlusAmount = () => {
        if ( amount > 50 ) return;
        setAmount( amount => amount + 1 );
        startCountdown();
    }

    const changeSubAmount = () => {
        if ( amount <= 0 ) return;
        setAmount( amount => amount - 1 );
        startCountdown();
    }

    const onUpdate = () => dispatch( setCurrentModal({ current: "update", product }) );
    const onDelete = () => dispatch( setCurrentModal({ current: "delete", product }));


    // RENDER
    return (
        <div className='
            flex flex-column flex-1 min-w-[300px] rounded-md p-3.5 bg-card bg-card_bg shadow-md gap-3
            sm:min-w-[200px]
        '>
            <div className='flex-grow flex flex-col'>

                <img className='rounded-md' src={getUrlCardImageWithBrand( brand )} />
                {/* <p className='font-title text-2xl uppercase font-semibold'>{brand}</p> */}
                <p className='capitalize text-lg'>
                    <b className='font-medium'>SABOR: </b> 
                    { `${ flavor } ${ size }` } 
                </p>

                <div className='flex justify-between'>
                    <div className='capitalize'>
                        <p className='text-base'><b className='font-medium'>CATEGORIA:</b> {category} </p>
                        <p className='text-sm'>Ubicacion &#35;{location}</p>
                    </div>

                    <div className='flex gap-2 items-end'>

                        <button 
                            className='
                                bg-card_btn text-card_btn text-xl 
                                h-9 aspect-square rounded-md
                                hover:brightness-[.90]
                                transition-base
                            ' 
                            onClick={onUpdate}
                        >
                            <i className="z-0 brightness-75 fa-solid fa-pen"/>
                        </button>

                        <button 
                            className='
                                bg-card_btn text-card_btn text-xl 
                                h-9 aspect-square rounded-md
                                hover:brightness-[.90]
                                transition-base
                            '
                            onClick={onDelete}
                        >
                            <i className="brightness-75 fa-solid fa-trash"/>
                        </button>

                    </div>
                </div>

            </div>

            <div className='w-12 text-card_btn bg-card_btn flex flex-col text-3xl rounded-md shadow-md'>
                <i className="
                        fa-solid fa-chevron-up 
                        hover:brightness-[.60] brightness-75 m-auto 
                        transition-base 
                        w-full cursor-pointer text-center
                    " 
                    onClick={changePlusAmount}/>

                <p className='brightness-50 text-center leading-3 cursor-default'>{ amount }</p>

                <i className="                    
                        fa-solid fa-chevron-down
                        hover:brightness-[.60] brightness-75 m-auto 
                        transition-base 
                        w-full cursor-pointer text-center
                    "
                    onClick={changeSubAmount}/>
            </div>
        </div>
    )
}