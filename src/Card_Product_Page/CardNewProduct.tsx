import "./cards.scss"
import "./card-new-product.scss"
import { useContext } from 'react';
import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';


export const CardNewProduct = () => {
    const { setCurrentStatusApp } = useContext(contextStatusApp)
    const onCreateProduct = () => { setCurrentStatusApp("create") }

    return (
        <div className='card-container card-new-product' onClick={onCreateProduct}>
            <i className="fa-solid fa-plus"/>
        </div>
    )
}
