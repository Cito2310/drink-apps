import { useContext } from 'react';
import { BlackScreen } from '../components/BlackScreen';
import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';
import "./modal.scss"

export const ModalCreateProduct = () => {
    const { setCurrentStatusApp, productSelected } = useContext(contextStatusApp)

    return (
        <>
            <BlackScreen/>
            <div id="modal-container">
                <div id="modal-top">
                    <button onClick={() => setCurrentStatusApp("none")}>
                        <i className="fa-solid fa-xmark"/>
                    </button>
                </div>

                <div id="modal-body">
                    <p>Creando nuevo producto</p>
                </div>

                <div id="modal-bottom">
                    <button>Aceptar</button>
                </div>
            </div>
        </>
    )
}