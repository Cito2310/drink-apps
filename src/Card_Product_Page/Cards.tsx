import { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { IProduct } from '../interfaces/IProduct';

import "./cards.scss"

interface props {
    product: IProduct
}

export const Cards = ( { product }: props ) => {
    const { brand, flavor, location, size, category } = product;
    // AMOUNT CONTROLLER
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

    // RENDER
    return (
        <div className='card-container'>
            <div className='container-description'>

                <p className='text-brand-card'>{brand}</p>
                <p className='text-flavor-card'><b>SABOR:</b> {flavor + " " + size} </p>

                <div className='container-button-and-category-location'>
                    <div className='container-category-location'>
                        <p className='text-category-card'><b>CATEGORIA:</b> {category} </p>
                        <p className='text-location-card'>UBICACION &#35;{location}</p>
                    </div>
                    <div className='container-button-edit-delete'>
                        <NavLink to={`../modify-product/${"hola"}`}><i className="fa-solid fa-pen"/></NavLink>
                        <NavLink to={"www.google.com"}><i className="fa-solid fa-trash"/></NavLink>
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