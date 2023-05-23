import { useEffect, useState, useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import axios from "axios";

import { CardProductPage } from "./Card_Product_Page/CardProductPage"
import { ListSelectPage } from './List_Select_Page/ListSelectPage';
import { LoadingScreen } from "./components/LoadingScreen";

import "./styles/config.scss"
import "./styles/background-pattern.scss"

import { LayoutProducts } from "./layout/LayoutProducts";


import { ModalCreateProduct } from './Modal_Component/ModalCreateProduct';
import { ModalEditProduct } from './Modal_Component/ModalEditProduct';
import { ModalDeleteProduct } from './Modal_Component/ModalDeleteProduct';

import { IStateRespProduct } from './interfaces/IStateRespProduct';
import { useAppDispatch, useAppSelector } from './store/store';
import { getProducts } from './store/product/productThunks';

export const DrinkApp = () => {
    // const { currentStatusApp } = useContext(contextStatusApp);
    // const { respProduct } = useContext(contextRespProducts);
    const { data, status } = useAppSelector( (state) => state.product )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch( getProducts() )
    }, [])
    

    return (
        <>
            {/* <div id="background-pattern"></div>
            {(currentStatusApp === "delete") ? <ModalDeleteProduct/> : null}
            {(currentStatusApp === "edit") ? <ModalEditProduct/> : null}
            {(currentStatusApp === "create") ? <ModalCreateProduct/> : null}
            */}
            {
                ( status.isLoading )
                ? <LoadingScreen/>

                : (
                    <LayoutProducts>
                        <Routes>

                            <Route path='/' element={ <CardProductPage products={ data } /> }/>

                            <Route path='/onlySelect' element={ <ListSelectPage products={ data } /> }/>

                            <Route path='/*' element={ <Navigate to={"/"}/> } />

                        </Routes>
                    </LayoutProducts>
                )
            } 
        </>
    )
}