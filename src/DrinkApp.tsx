import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"

import { CardProductPage } from "./Card_Product_Page/CardProductPage"
import { ListSelectPage } from './List_Select_Page/ListSelectPage';
import { LoadingScreen } from "./components/LoadingScreen";

import "./styles/config.scss"
import "./styles/background-pattern.scss"

import { LayoutProducts } from "./layout/LayoutProducts";


import { ModalCreateProduct } from './Modal_Component/ModalCreateProduct';
import { ModalUpdateProduct } from './Modal_Component/ModalUpdateProduct';
import { ModalDeleteProduct } from './Modal_Component/ModalDeleteProduct';

import { useAppDispatch, useAppSelector } from './store/store';
import { getProducts } from './store/product/productThunks';

export const DrinkApp = () => {
    const { data, status } = useAppSelector( (state) => state.product )
    const { current } = useAppSelector( (state) => state.modal )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch( getProducts() )
    }, [])
    

    return (
        <>
            { current === "create" && <ModalCreateProduct /> }
            { current === "delete" && <ModalDeleteProduct /> }
            { current === "update" && <ModalUpdateProduct /> }

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