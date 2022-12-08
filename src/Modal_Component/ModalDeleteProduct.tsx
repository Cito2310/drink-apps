import { useContext } from 'react';

import { ModalLayout } from './ModalLayout';

import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';

export const ModalDeleteProduct = () => {
    // CONTROLLER STATUS APP
    const { setCurrentStatusApp, productSelected } = useContext(contextStatusApp);
    const onStatusNone = () => {setCurrentStatusApp("none")};

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
                <button className='btn-modal btn-color-secondary'>No</button>
                <button className='btn-modal btn-color-primary'>Si</button>
            </div>
        </ModalLayout>
    )
}