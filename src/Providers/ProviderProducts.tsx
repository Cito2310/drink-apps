import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import { IStateRespProduct } from '../interfaces/IStateRespProduct';
import { IProduct } from '../interfaces/IProduct';

import { getOrderProduct } from '../helpers/getOrderProduct';

interface props { children: JSX.Element | JSX.Element[] }

export interface IProductProvider {
    respProduct: IStateRespProduct;
    onAddProductsArray: (product: IProduct) => void;
    onDeleteProductsArray: (product: IProduct) => void;
    onModifyProductsArray: (product: IProduct) => void;
    onChangeAmountProductArray: (productModify: IProduct, newAmount: number) => void
}

export const contextRespProducts = createContext<IProductProvider>({} as IProductProvider)

export const ProviderRespProducts = ({children}: props) => {
    // get products api
    const [respProduct, setRespProduct] = useState<IStateRespProduct>({status: false, data: []});
    useEffect(() => {
        const getProduct = async() => {
            const { data } = await axios.get("https://node-ts-load-drink-api.onrender.com/api/product");
            return data;
        }
        getProduct()
            .then( data => {  setRespProduct({ status: true, data: getOrderProduct(data) })   })
            .catch(console.error)
    }, [])
    

    // controllers products
    const onAddProductsArray = ( productAdded: IProduct ) => {
        let productArr = respProduct.data;
        productArr.push( productAdded );

        setRespProduct({ status: true, data: getOrderProduct( productArr )})
    }

    const onDeleteProductsArray = ( productDelete: IProduct ) => {
        let productArr = respProduct.data;

        let indexProduct = 0;
        for (const [index, product] of productArr.entries()) {
          if (product._id === productDelete._id) { 
            indexProduct = index; 
            break;
          };
        }
        productArr.splice(indexProduct, 1)
        setRespProduct({status: true, data: productArr});
    }

    const onModifyProductsArray = ( productModify: IProduct ) => {
        let productArr = respProduct.data;

        let indexProduct = 0;
        for (const [index, product] of productArr.entries()) {
          if (product._id === productModify._id) { 
            indexProduct = index; 
            break;
          };
        }
        productArr.splice(indexProduct, 1);

        productArr.push( productModify );
        setRespProduct({status: true, data: getOrderProduct( productArr )});
    }

    const onChangeAmountProductArray = ( productModify: IProduct, newAmount: number ) => {
        let productArr = respProduct.data;
        productModify.amount = newAmount;

        let indexProduct = 0;
        for (const [index, product] of productArr.entries()) {
          if (product._id === productModify._id) { 
            indexProduct = index; 
            break;
          };
        }
        productArr.splice(indexProduct, 1)

        productArr.push( productModify );
        setRespProduct({status: true, data: getOrderProduct( productArr )});
    }


    // R E N D E R   P R O V I D E R
    return (
        <contextRespProducts.Provider value={{respProduct, onAddProductsArray, onDeleteProductsArray, onModifyProductsArray, onChangeAmountProductArray}}>
            {children}
        </contextRespProducts.Provider>
    )
}