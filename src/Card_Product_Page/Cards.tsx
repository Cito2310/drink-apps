import { useLayoutEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { IProduct } from '../interfaces/IProduct';

import "./cards.scss"
import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';
import { colorFlavor } from '../helpers/colorFlavor';

interface props {
    product: IProduct
}

export const Cards = ( { product }: props ) => {
    const { brand, flavor, location, size, category } = product;

    
    // CONTROLLERS - CHANGE AMOUNT
    const [amount, setAmount] = useState<number>(product.amount);
    const [timerAmount, setTimerAmount] = useState<string | boolean>("");
    
    const checkTimer = (timerAmount === true || timerAmount === "");
    const changePlusAmount = () => {
        if (amount < 50) {
            setAmount(amount + 1);
            if (checkTimer) setTimerAmount(false);
    }}

    const changeSubAmount = () => {
        if (amount > 0) {
            setAmount(amount - 1); 
            if (checkTimer) setTimerAmount(false);
    }}

    useLayoutEffect(() => {
        if (timerAmount === false) {setTimeout(()=>{setTimerAmount(true)},1000)}
        if (timerAmount === true) {axios.put(`https://node-ts-load-drink.onrender.com/api/product/amount/${product._id}`, {newAmount: amount})}
    }, [timerAmount])


    // CONTROLLERS - EDIT AND REMOVE
    const { setCurrentStatusApp, setProductSelected } = useContext(contextStatusApp)
    const onEdit = (): void => { setProductSelected(product); setCurrentStatusApp('edit') }
    const onRemove = (): void => { setProductSelected(product); setCurrentStatusApp('delete') }


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
                        <button onClick={onRemove}><i className="fa-solid fa-trash"/></button>
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