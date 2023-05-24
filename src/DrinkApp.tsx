import { useEffect } from 'react';
import { LoadingScreen, ModalCreateProduct, ModalUpdateProduct, ModalDeleteProduct } from "./components";
import { useAppDispatch, useAppSelector } from './store/store';
import { getProducts } from './store/product/productThunks';
import { RoutesProducts } from './routes/RoutesProducts';

export const DrinkApp = () => {
    const { data, status } = useAppSelector( (state) => state.product )
    const { current } = useAppSelector( (state) => state.modal )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch( getProducts() )
    }, [])
    

    return (
        <>
            {
                ( status.isLoading )
                ? <LoadingScreen />
                : <RoutesProducts  data={ data } />
            } 

            { current === "create" && <ModalCreateProduct /> }
            { current === "delete" && <ModalDeleteProduct /> }
            { current === "update" && <ModalUpdateProduct /> }
        </>
    )
}