import { fetchApi } from "../../helpers/fetchApi";
import { AppDispatch, RootState } from "../store";
import { createProduct, initLoading, setProducts, stopLoading, updateProduct } from "./";

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