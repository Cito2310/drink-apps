import { useForm } from "../../hooks";
import { LayoutModal } from "../../layout";
import { useAppDispatch, useAppSelector, startUpdateProductById, closeModal } from "../../store";
import { InputForm } from "../InputForm";

export const ModalUpdateProduct = () => {
    const dispatch = useAppDispatch();
    const onCloseModal = () => { dispatch( closeModal() ) };

    const { selectedProduct } = useAppSelector( state => state.modal );

    const onUpdate = async() => {
        await dispatch( startUpdateProductById( selectedProduct!._id, formState ) )
    }

    const {
        brand, category, flavor, size, location,
        formState, onInputChange, onResetForm,
    } = useForm({
        brand: selectedProduct!.brand,
        category: selectedProduct!.category,
        flavor: selectedProduct!.flavor,
        size: selectedProduct!.size,
        location: selectedProduct!.location,
    })



    return (
        <LayoutModal
            title="Editar Producto"
            onExit={ onCloseModal }
            onSubmit={ onUpdate }
            buttons={[
                { color: "secondary", label: "Rechazar", func: onCloseModal },
                { color: "primary", label: "Editar", type:"submit" },
            ]}
        >
            <div className="flex flex-col gap-2 uppercase">
                <InputForm 
                    label="Marca"
                    name="brand" value={brand} 
                    type="text" onInput={onInputChange} 
                />
                
                <InputForm 
                    label="Categoria"
                    name="category" value={category} 
                    type="text" onInput={onInputChange} 
                />

                <InputForm 
                    label="Sabor"
                    name="flavor" value={flavor} 
                    type="text" onInput={onInputChange} 
                />

                <InputForm 
                    label="Tamaño"
                    name="size" value={size} 
                    type="text" onInput={onInputChange} 
                />

                <InputForm 
                    label="Ubicacion"
                    name="location" value={location} 
                    type="number" onInput={onInputChange} 
                    limit={[0, 100]}
                />
            </div>
        </LayoutModal>
    )
}