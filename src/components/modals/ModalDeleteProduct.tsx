import { LayoutModal } from "../../layout";
import { useAppDispatch, useAppSelector, closeModal, startDeleteProductById } from "../../store";

export const ModalDeleteProduct = () => {
    const dispatch = useAppDispatch();
    const onCloseModal = () => { dispatch( closeModal() ) };

    const { selectedProduct } = useAppSelector( state => state.modal );

    const onDelete = async( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        await dispatch( startDeleteProductById( selectedProduct!._id ) );
    }


    
    return (
        <LayoutModal
            title="Eliminar Producto"
            onExit={ onCloseModal }
            onSubmit={ onDelete }
            buttons={[
                { color: "secondary", label: "Rechazar", func: onCloseModal },
                { color: "danger", label: "Eliminar", type:"submit" },
            ]}
        >
            <p>Seguro que deseas eliminar este producto?</p>
        </LayoutModal>
    )
}