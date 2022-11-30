import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import axios from "axios";

import { CardProductPage } from "./Card_Product_Page/CardProductPage"
import { ListSelectPage } from './List_Select_Page/ListSelectPage';
import { LoadingScreen } from "./components/LoadingScreen";

import "./styles/config.scss"
import "./styles/background-pattern.scss"

import { IStateRespProduct } from './interfaces/IStateRespProduct';
import { LayoutProducts } from "./layout/LayoutProducts";


export const DrinkApp = () => {
    const [currentStatusApp, setCurrentStatusApp] = useState("none")
    const [respProduct, setRespProduct] = useState<IStateRespProduct>({status: false, data: []})
  
    useEffect(() => {
        const getProduct = async() => {
            const { data } = await axios.get("https://node-ts-load-drink.onrender.com/api/product");
            return data;
        }
        getProduct()
            .then( data => {  setRespProduct({ status: true, data })   })
            .catch(console.error)
  }, [])
    

    return (
        <>
            <div id="background-pattern"></div>
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