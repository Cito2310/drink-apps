import { useState } from 'react';

import { IProduct } from '../interfaces/IProduct';

import "./cards.scss"
import { colorFlavor } from '../helpers/colorFlavor';
import { useCountdown } from '../hooks/useCountdown';

import { useAppDispatch } from '../store';
import { startUpdateAmountById } from '../store/product';
import { setCurrent } from '../store/modal';

interface props {
    product: IProduct
}

export const Cards = ( { product }: props ) => {
    const { brand, flavor, location, size, category } = product;
    const dispatch = useAppDispatch()
    
    // CONTROLLERS - CHANGE AMOUNT
    const [amount, setAmount] = useState<number>(product.amount);
    
    const [ startCountdown ] = useCountdown( 800, 
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


    // CONTROLLERS - EDIT AND REMOVE
    const onEdit = () => dispatch( setCurrent({ current: "update", product }) );
    const onDelete = () => dispatch( setCurrent({ current: "delete", product }));


    // RENDER
    return (
        <div className='card-container'>
            <div className='container-description'>

                <p className='text-brand-card'>{brand}</p>
                <p className='text-flavor-card' style={{color: colorFlavor(flavor)}}><b>SABOR:</b> {flavor + " " + size} </p>

                <div className='container-button-and-category-location'>
                    <div className='container-category-location'>
                        <p className='text-category-card'><b>CATEGORIA:</b> {category} </p>
                        <p className='text-location-card'>UBICACION &#35;{location}</p>
                    </div>
                    <div className='container-button-edit-delete'>
                        <button onClick={onEdit}><i className="fa-solid fa-pen"/></button>
                        <button onClick={onDelete}><i className="fa-solid fa-trash"/></button>
                    </div>
                </div>

            </div>

            <div className='container-button-amount'>
                <i className="fa-solid fa-chevron-up" onClick={changePlusAmount}/>
                <p>{amount}</p>
                <i className="fa-solid fa-chevron-down" onClick={changeSubAmount}/>
            </div>
        </div>
    )
}