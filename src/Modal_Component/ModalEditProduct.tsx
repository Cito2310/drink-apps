import { useContext, useState } from 'react';

import { ModalLayout } from './ModalLayout';

import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';
import { useForm } from './helpers/useForm';
import { FormInputText } from './components/FormInputText';

export const ModalEditProduct = () => {
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
        location: "",
    })

    // CONTROLLER FORM REQ HTTP
    interface IReqHttp {
        status: "error" | "loading" | "none" | "ready",
        msg: string 
    }
    const [reqHttp, setReqHttp] = useState<IReqHttp>({ status: "ready" , msg: "Ha ocurrido un error " })


    // RENDER
    return (
        <ModalLayout>
            <div id="modal-top">
                <h3>Editar Producto</h3>

                <button onClick={onStatusNone}>
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>

            <div id="modal-body">

                <FormInputText
                    label='Marca'
                    name="brand"
                    onInputChange={onInputChange}
                    value={brand}
                />

                <FormInputText
                    label='Categoria'
                    name="category"
                    onInputChange={onInputChange}
                    value={category}
                />

                <FormInputText
                    label='Sabor'
                    name="flavor"
                    onInputChange={onInputChange}
                    value={flavor}
                />

                <FormInputText
                    label='Tamaño'
                    name="size"
                    onInputChange={onInputChange}
                    value={size}
                />

                <FormInputText
                    label='Ubicacion'
                    name="location"
                    onInputChange={onInputChange}
                    value={location}
                />

            </div>

            <div id="modal-bottom">
                {reqHttp.status === "error" ? <p className='advert-error'>{reqHttp.msg}<i className="fa-solid fa-exclamation"/></p> : null}
                {reqHttp.status === "loading" ? <p className='advert-loading'><i className="spinner fa-solid fa-spinner"/></p> : null}
                {reqHttp.status === "ready" ? <p className='advert-ready'>Hecho <i className="fa-solid fa-check"/></p> : null}
                <button>Aceptar</button>
            </div>
        </ModalLayout>
    )
}