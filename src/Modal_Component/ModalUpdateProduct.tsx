import { ModalLayout } from './ModalLayout';
import { FormInputText } from './components/FormInputText';
import { FormInputNumber } from './components/FormInputNumber';


import { useForm } from './helpers/useForm';
import { useAppDispatch, useAppSelector } from '../store';
import { closeModal } from '../store/modal';
import { startUpdateProductById } from '../store/product';


export const ModalUpdateProduct = () => {
    // CONTROLLER STATUS APP
    const dispatch = useAppDispatch();
    const onCloseModal = () => { dispatch( closeModal() ) };

    const { selectedProduct } = useAppSelector( state => state.modal );

    const onSubmit = async() => {
        await dispatch( startUpdateProductById( selectedProduct!._id, formState ) )
    }

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
        brand: selectedProduct!.brand,
        category: selectedProduct!.category,
        flavor: selectedProduct!.flavor,
        size: selectedProduct!.size,
        location: selectedProduct!.location,
    })

    // RENDER
    return (
        <ModalLayout>
            <div id="modal-top">
                <h3>Editar Producto</h3>

                <button onClick={onCloseModal}>
                    <i className="fa-solid fa-xmark"/>
                </button>
            </div>

            <form onSubmit={ onSubmit }>
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
                    <input className='btn-modal btn-color-primary' type="submit" value="Editar"/>
                </div>
            </form>
        </ModalLayout>
    )
}