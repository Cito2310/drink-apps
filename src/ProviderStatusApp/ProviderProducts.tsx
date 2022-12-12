import { createContext, useState, useEffect } from 'react';
import { IProduct } from '../interfaces/IProduct';
import axios from 'axios';
import { IStateRespProduct } from '../interfaces/IStateRespProduct';

interface props { children: JSX.Element | JSX.Element[] }

export interface IProductProvider {
    respProduct: IStateRespProduct
}


export const contextRespProducts = createContext<IProductProvider>({} as IProductProvider)

export const ProviderRespProducts = ({children}: props) => {
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
        <contextRespProducts.Provider value={{respProduct}}>
            {children}
        </contextRespProducts.Provider>
    )
}