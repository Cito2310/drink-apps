import "./cards.scss"
import "./card-new-product.scss"

import { useAppDispatch } from "../store";
import { setCurrent } from "../store/modal";


export const CardNewProduct = () => {
    const dispatch = useAppDispatch();

    const onCreateProduct = () => { dispatch( setCurrent({ current: "create" }) ) }

    return (
        <div className='card-container card-new-product' onClick={onCreateProduct}>
            <i className="fa-solid fa-plus"/>
        </div>
    )
}
