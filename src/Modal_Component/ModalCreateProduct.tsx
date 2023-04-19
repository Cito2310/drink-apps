import { useContext, useState } from 'react';
import axios from 'axios';

import { IReqHttp } from '../interfaces/IReqHttp';

import { ModalLayout } from './ModalLayout';

import { contextStatusApp } from '../Providers/ProviderStatusApp';
import { contextRespProducts } from '../Providers/ProviderProducts';

import { checkInputsProduct } from './helpers/checkInputs';
import { useForm } from './helpers/useForm';

import { FormInputText } from './components/FormInputText';
import { FormInputNumber } from './components/FormInputNumber';



export const ModalCreateProduct = () => {
    // CONTROLLER STATUS APP
    const { setCurrentStatusApp, productSelected } = useContext(contextStatusApp);
    const onStatusNone = () => {setCurrentStatusApp("none")};

    // CONTROLLER FORM
    const {
        brand,
        category,
        flavor,
        size,
        location,

        formState,
        onInputChange,
        onResetForm,
    } = useForm({
        brand: "",
        category: "",
        flavor: "",
        size: "",
        location: 0,
    })

    // CONTROLLER FORM REQ HTTP
    const [reqHttp, setReqHttp] = useState<IReqHttp>({ status: "none" , msg: "Ha ocurrido un error " })

    // CONTROLLER SUBMIT AND PRODUCT
    const { onAddProductsArray } = useContext(contextRespProducts)

    const onSubmitEdit = async(event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (checkInputsProduct( formState, setReqHttp )) {
                setReqHttp({ status:"loading", msg:"" });
                const { data } = await axios.post(`https://node-ts-load-drink.onrender.com/api/product/`, formState);
                onAddProductsArray(data)
                setReqHttp({ status:"ready", msg:"" });
                setTimeout(onStatusNone, 300)
            }
        } catch (error) {
            setReqHttp({ status:"error", msg:"Ha ocurrido un error"})
        }
    }


    // RENDER
    return (
        <ModalLayout>
            <div id="modal-top">
                <h3>Crear Producto</h3>

                <button onClick={onStatusNone}>
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>

            <form onSubmit={onSubmitEdit}>
                <div id="modal-body">
                    <FormInputText
                        label='Marca'
                        nameInput="brand"
                        onInputChange={onInputChange}
                        value={brand}
                    />

                    <FormInputText
                        label='Categoria'
                        nameInput="category"
                        onInputChange={onInputChange}
                        value={category}
                    />

                    <FormInputText
                        label='Sabor'
                        nameInput="flavor"
                        onInputChange={onInputChange}
                        value={flavor}
                    />

                    <FormInputText
                        label='Tamaño'
                        nameInput="size"
                        onInputChange={onInputChange}
                        value={size}
                    />

                    <FormInputNumber
                        label='Ubicacion'
                        nameInput="location"
                        onInputChange={onInputChange}
                        value={location}
                        min={0} max={30}
                    />
                </div>

                <div id="modal-bottom">
                    {reqHttp.status === "error" ? <p className='advert-error'>{reqHttp.msg} <i className="fa-solid fa-exclamation"/></p> : null}
                    {reqHttp.status === "loading" ? <p className='advert-loading'><i className="spinner fa-solid fa-spinner"/></p> : null}
                    {reqHttp.status === "ready" ? <p className='advert-ready'>Hecho <i className="fa-solid fa-check"/></p> : null}
                    <input className='btn-modal btn-color-primary' type="submit" value="Crear"/>
                </div>
            </form>
        </ModalLayout>
    )
}