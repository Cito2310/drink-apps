import { createContext, useState } from 'react';

interface props { children: JSX.Element | JSX.Element[] }

export interface IStatusApp {
    currentStatusApp : TStatusValid;
    setCurrentStatusApp : React.Dispatch<React.SetStateAction<TStatusValid>>;
}

type TStatusValid = "none" | "delete" | "edit"; 

export const contextStatusApp = createContext<IStatusApp>({} as IStatusApp)

export const ProviderStatusApp = ({children}: props) => {
    const [currentStatusApp, setCurrentStatusApp] = useState<TStatusValid>("none")
    
    return (
        <contextStatusApp.Provider value={{currentStatusApp, setCurrentStatusApp}}>
            {children}
        </contextStatusApp.Provider>
    )
}
