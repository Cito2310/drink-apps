import { ModalLayout } from './ModalLayout';

import { useForm } from './helpers/useForm';

import { FormInputText } from './components/FormInputText';
import { FormInputNumber } from './components/FormInputNumber';
import { useAppDispatch } from '../store';
import { closeModal } from '../store/modal';
import { startCreateProduct } from '../store/product';



export const ModalCreateProduct = () => {
    // CONTROLLER STATUS APP
    const dispatch = useAppDispatch();
    const onCloseModal = () => { dispatch( closeModal() ) };

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
    const onSubmit = async() => {
        await dispatch( startCreateProduct( formState ) )
    }


    // RENDER
    return (
        <ModalLayout>
            <div id="modal-top">
                <h3>Crear Producto</h3>

                <button onClick={ onCloseModal }>
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>

            <form onSubmit={onSubmit}>
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
                    {/* {reqHttp.status === "error" ? <p className='advert-error'>{reqHttp.msg} <i className="fa-solid fa-exclamation"/></p> : null}
                    {reqHttp.status === "loading" ? <p className='advert-loading'><i className="spinner fa-solid fa-spinner"/></p> : null}
                    {reqHttp.status === "ready" ? <p className='advert-ready'>Hecho <i className="fa-solid fa-check"/></p> : null} */}
                    <input className='btn-modal btn-color-primary' type="submit" value="Crear"/>
                </div>
            </form>
        </ModalLayout>
    )
}