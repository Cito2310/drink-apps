import { useAppDispatch } from "../store";
import { setCurrent } from "../store/modal";


export const CardNewProduct = () => {
    const dispatch = useAppDispatch();

    const onCreateProduct = () => { dispatch( setCurrent({ current: "create" }) ) }

    return (
        <div className='
                cursor-pointer transition-base hover:brightness-90
                flex flex-column flex-1 min-h-[121px] min-w-[300px] rounded-md p-3.5 bg-card bg-card_bg shadow-md' 
            onClick={onCreateProduct}
        >
            <i className="text-card_btn brightness-75 m-auto text-6xl fa-solid fa-plus drop-shadow-md "/>
        </div>
    )
}
