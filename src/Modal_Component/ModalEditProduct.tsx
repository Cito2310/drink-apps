import { useContext, useState } from 'react';
import axios from 'axios';

import { IReqHttp } from '../interfaces/IReqHttp';

import { ModalLayout } from './ModalLayout';
import { FormInputText } from './components/FormInputText';
import { FormInputNumber } from './components/FormInputNumber';

import { contextStatusApp } from '../ProviderStatusApp/ProviderStatusApp';

import { useForm } from './helpers/useForm';
import { checkInputsProduct } from './helpers/checkInputs';


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
        brand: productSelected.brand,
        category: productSelected.category,
        flavor: productSelected.flavor,
        size: productSelected.size,
        location: productSelected.location,
    })

    // CONTROLLER FORM REQ HTTP
    const [reqHttp, setReqHttp] = useState<IReqHttp>({ status: "none" , msg: "Ha ocurrido un error " })

    // CONTROLLER SUBMIT
    const onSubmitEdit = async(event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (checkInputsProduct( formState, setReqHttp )) {
                setReqHttp({ status:"loading", msg:"" });
                await axios.put(`https://load-drink-api.onrender.com/api/product/${productSelected._id}`, formState);
                setReqHttp({ status:"ready", msg:"" });
                setTimeout(onStatusNone, 300)
            }
        } catch (error) {
            setReqHttp({ status:"error", msg:"Ha ocurrido un error"})
            // console.log(error)
        }
    }


    // RENDER
    return (
        <ModalLayout>
            <div id="modal-top">
                <h3>Editar Producto</h3>

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
                    <input type="submit" value="Editar"/>
                </div>
            </form>
        </ModalLayout>
    )
}