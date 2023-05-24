import { useForm } from "../../hooks";
import { LayoutModal } from "../../layout";
import { useAppDispatch, closeModal, startCreateProduct } from "../../store";
import { InputForm } from "../InputForm";

const initForm = {
    brand: "",
    category: "",
    flavor: "",
    size: "",
    location: 0,
}

export const ModalCreateProduct = () => {

    const dispatch = useAppDispatch();
    const onCloseModal = () => { dispatch( closeModal() ) };

    const {
        brand, category, flavor, location, size,
        formState, onInputChange, onResetForm
    } = useForm( initForm );

    const onCreate = async() => {
        await dispatch( startCreateProduct( formState ) )
    }

    return (
        <LayoutModal
            title="Editar Producto"
            onExit={ onCloseModal }
            onSubmit={ onCreate }
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
                    placeholder="Inserte la marca"
                />
                
                <InputForm 
                    label="Categoria"
                    name="category" value={category} 
                    type="text" onInput={onInputChange} 
                    placeholder="Inserte la categoria"
                />

                <InputForm 
                    label="Sabor"
                    name="flavor" value={flavor} 
                    type="text" onInput={onInputChange} 
                    placeholder="Inserte el sabor"
                />

                <InputForm 
                    label="Tamaño"
                    name="size" value={size} 
                    type="text" onInput={onInputChange} 
                    placeholder="Inserte la tamaño"
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