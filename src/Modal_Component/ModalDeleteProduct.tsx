import { useContext, useState } from 'react';
import axios from 'axios';

import { IReqHttp } from '../interfaces/IReqHttp';

import { ModalLayout } from './ModalLayout';

import { contextStatusApp } from '../Providers/ProviderStatusApp';
import { contextRespProducts } from '../Providers/ProviderProducts';



export const ModalDeleteProduct = () => {
    // CONTROLLER STATUS APP
    const { setCurrentStatusApp, productSelected } = useContext(contextStatusApp);
    const onStatusNone = () => {setCurrentStatusApp("none")};

    // CONTROLLER FORM REQ HTTP
    const [reqHttp, setReqHttp] = useState<IReqHttp>({ status: "none" , msg: "" })

    // CONTROLLER DELETE PRODUCT
    const { onDeleteProductsArray } = useContext(contextRespProducts)

    const onDelete = async() => {
        try {
            setReqHttp({status: "loading", msg: ""})
            await axios.delete(`https://node-ts-load-drink.onrender.com/api/product/${productSelected._id}`)
            onDeleteProductsArray(productSelected)
            onStatusNone()

        } catch (error) {
            setReqHttp({status: "error", msg: ""})
        }
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
                <button className='btn-modal btn-color-advert' onClick={onDelete}>
                    {
                        (reqHttp.status === "none") ? "Si"
                        : (reqHttp.status === "error") ? <p className='advert-error' style={{color:"#fff"}}><i className="fa-solid fa-xmark"/> Error</p>
                        : (reqHttp.status === "loading") ? <p className='advert-loading' style={{color:"#fff"}}><i className="spinner fa-solid fa-spinner"/></p> : null
                    }
                </button>
            </div>
        </ModalLayout>
    )
}