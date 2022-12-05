import { useEffect, useState, useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import axios from "axios";

import { CardProductPage } from "./Card_Product_Page/CardProductPage"
import { ListSelectPage } from './List_Select_Page/ListSelectPage';
import { LoadingScreen } from "./components/LoadingScreen";

import "./styles/config.scss"
import "./styles/background-pattern.scss"

import { LayoutProducts } from "./layout/LayoutProducts";

import { contextStatusApp } from './ProviderStatusApp/ProviderStatusApp';

import { ModalCreateProduct } from './Modal_Component/ModalCreateProduct';
import { ModalEditProduct } from './Modal_Component/ModalEditProduct';
import { ModalDeleteProduct } from './Modal_Component/ModalDeleteProduct';

import { IStateRespProduct } from './interfaces/IStateRespProduct';

export const DrinkApp = () => {
    const { currentStatusApp } = useContext(contextStatusApp);
    const [respProduct, setRespProduct] = useState<IStateRespProduct>({status: false, data: []})
  
    useEffect(() => {
        const getProduct = async() => {
            const { data } = await axios.get("https://load-drink-api.onrender.com/api/product");
            return data;
        }
        getProduct()
            .then( data => {  setRespProduct({ status: true, data })   })
            .catch(console.error)
  }, [])
    

    return (
        <>
            <div id="background-pattern"></div>
            {(currentStatusApp === "delete") ? <ModalDeleteProduct/> : null}
            {(currentStatusApp === "edit") ? <ModalEditProduct/> : null}
            {(currentStatusApp === "create") ? <ModalCreateProduct/> : null}
            {
                (respProduct.status) 
                ?<Routes>
                    <Route path="/" element={
                        <LayoutProducts>
                            <CardProductPage products={respProduct.data}/>
                        </LayoutProducts>
                    }/>
                    
                    <Route path="/select" element={
                        <LayoutProducts>
                            <ListSelectPage products={respProduct.data}/>
                        </LayoutProducts>
                    }/>

                    <Route path="/*" element={<Navigate to={"/"}/>} />
                </Routes>

                : <LoadingScreen/>
            }
        </>
    )
}