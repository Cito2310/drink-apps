import { useContext } from 'react';

import { ModalLayout } from './ModalLayout';

import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';

export const ModalDeleteProduct = () => {
    const { setCurrentStatusApp, productSelected } = useContext(contextStatusApp)

    return (
        <ModalLayout>
            <div id="modal-top">
                <button onClick={() => setCurrentStatusApp("none")}>
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>

            <div id="modal-body">
                <p>Borrando producto</p>
            </div>

            <div id="modal-bottom">
                <button>Aceptar</button>
            </div>
        </ModalLayout>
    )
}