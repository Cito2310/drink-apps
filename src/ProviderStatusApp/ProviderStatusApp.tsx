import { createContext, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';

interface props { children: JSX.Element | JSX.Element[] }

export interface IStatusApp {
    currentStatusApp : TStatusValid;
    setCurrentStatusApp : React.Dispatch<React.SetStateAction<TStatusValid>>;
    productSelected : IProduct;
    setProductSelected : React.Dispatch<React.SetStateAction<IProduct>>;
}

type TStatusValid = "none" | "delete" | "edit" | "create"; 

export const contextStatusApp = createContext<IStatusApp>({} as IStatusApp)

export const ProviderStatusApp = ({children}: props) => {
    const [currentStatusApp, setCurrentStatusApp] = useState<TStatusValid>("edit");
    const [productSelected, setProductSelected] = useState<IProduct>({} as IProduct)

    return (
        <contextStatusApp.Provider value={{currentStatusApp, setCurrentStatusApp, productSelected, setProductSelected}}>
            {children}
        </contextStatusApp.Provider>
    )
}
