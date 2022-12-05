import { createContext, useState } from 'react';

interface props { children: JSX.Element | JSX.Element[] }

export interface IStatusApp {
    currentStatusApp : TStatusValid;
    setCurrentStatusApp : React.Dispatch<React.SetStateAction<TStatusValid>>;
}

type TStatusValid = "none" | "delete" | "edit"; 

export const contextSideBar = createContext<IStatusApp>({} as IStatusApp)

export const ProviderSideBar = ({children}: props) => {
    const [currentStatusApp, setCurrentStatusApp] = useState<TStatusValid>("none")

    return (
        <contextSideBar.Provider value={{currentStatusApp, setCurrentStatusApp}}>
            {children}
        </contextSideBar.Provider>
    )
}
