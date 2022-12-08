import { useContext } from 'react';

import { ModalLayout } from './ModalLayout';

import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';
import axios from 'axios';

export const ModalDeleteProduct = () => {
    // CONTROLLER STATUS APP
    const { setCurrentStatusApp, productSelected } = useContext(contextStatusApp);
    const onStatusNone = () => {setCurrentStatusApp("none")};

    // CONTROLLER DELETE PRODUCT
    const onDelete = async() => {
        await axios.delete(`https://load-drink-api.onrender.com/api/product/${productSelected._id}`)
        onStatusNone()
    }

    return (
        <ModalLayout>
            <div id="modal-top">
                    <h3>Borrar Producto</h3>

                    <button onClick={onStatusNone}>
                        <i className="fa-solid fa-xmark"/>
                    </button>
            </div>

            <div id="modal-body">
                <p>Seguro que deseas borrar este producto?</p>
            </div>

            <div id="modal-bottom">
                <button className='btn-modal btn-color-secondary' onClick={onStatusNone}>No</button>
                <button className='btn-modal btn-color-primary' onClick={onDelete}>Si</button>
            </div>
        </ModalLayout>
    )
}