import { createProduct, initLoading, setProducts, stopLoading, updateProduct } from "./";
import { fetchApi } from "../../helpers";
import { AppDispatch, RootState } from "../store";
import { FormProductData, Product } from "../../types";
import { closeModal } from "../modal";

export const getProducts = () => {
    return async( dispatch: AppDispatch ) => {

        dispatch( initLoading() );

        const { data } = await fetchApi( "api/product" );

        dispatch( setProducts( data ) );
        dispatch( stopLoading() );

    };
};

export const startUpdateAmountById = ( id: string, newAmount: number ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {

        const { data } = await fetchApi(`api/product/amount/${ id }`, 
            {
                headers: { "Content-Type": "application/json" },
                method: "PUT",
                body: JSON.stringify({ newAmount })
            }
        );

        dispatch( updateProduct( data ) );
    };
};

export const startAmountToZero = ( product: Product ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {

        dispatch( updateProduct({...product, amount: 0}) );
        await fetchApi(`api/product/amount/${ product._id }`,
            {
                headers: { "Content-Type": "application/json" },
                method: "PUT",
                body: JSON.stringify({ newAmount: 0 })
            }
        )

    }
}


export const startCreateProduct = ( createProductData: FormProductData ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( initLoading() );

        const { data } = await fetchApi(`api/product`, 
            {
                headers: { "Content-Type": "application/json" },
                method: "PUT",
                body: JSON.stringify( createProductData )
            }
        );

        dispatch( createProduct( data ) );
        dispatch( stopLoading() );
        dispatch( closeModal() );
    }
}

export const startUpdateProductById = ( id: string, updateProductData: FormProductData ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( initLoading() );

        const { data } = await fetchApi(`api/product/${ id }`,
            {
                headers: { "Content-Type": "application/json" },
                method: "PUT",
                body: JSON.stringify( updateProductData )       
            }
        );

        dispatch( updateProduct( data ) );
        dispatch( stopLoading() );
        dispatch( closeModal() );
    }
}

export const startDeleteProductById = ( id: string ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( initLoading() );

        await fetchApi( `api/product/${ id }`, { method: "DELETE" } );

        dispatch( stopLoading() );
        dispatch( closeModal() );
    }
}