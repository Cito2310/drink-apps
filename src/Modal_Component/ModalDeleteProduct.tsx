import { ModalLayout } from './ModalLayout';
import { useAppDispatch, useAppSelector } from '../store';
import { closeModal } from '../store/modal';
import { startDeleteProductById } from '../store/product';



export const ModalDeleteProduct = () => {
    // CONTROLLER STATUS APP
    const dispatch = useAppDispatch();
    const onCloseModal = () => { dispatch( closeModal() ) };

    const modal = useAppSelector( state => state.modal );

    const onDelete = async() => {
        await dispatch( startDeleteProductById( modal.selectedProduct!._id ) )
    }

    return (
        <ModalLayout>
            <div id="modal-top">
                    <h3>Borrar Producto</h3>

                    <button onClick={onCloseModal}>
                        <i className="fa-solid fa-xmark"/>
                    </button>
            </div>

            <div id="modal-body">
                <p>Seguro que deseas borrar este producto?</p>
            </div>

            <div id="modal-bottom">
                <button className='btn-modal btn-color-secondary' onClick={onCloseModal}>No</button>
                <button className='btn-modal btn-color-advert' onClick={onDelete}>
                    {
                        // (reqHttp.status === "none") ? "Si"
                        // : (reqHttp.status === "error") ? <p className='advert-error' style={{color:"#fff"}}><i className="fa-solid fa-xmark"/> Error</p>
                        // : (reqHttp.status === "loading") ? <p className='advert-loading' style={{color:"#fff"}}><i className="spinner fa-solid fa-spinner"/></p> : null
                    }
                </button>
            </div>
        </ModalLayout>
    )
}