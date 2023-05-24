import { useAppDispatch } from '../store';
import { toggleSidebar } from "../store/sidebar";

export const BtnToggleSidebar = () => {
    const dispatch = useAppDispatch()
    const onToggleSidebar = () => { dispatch( toggleSidebar() ) }

    return (
        <button 
            className="
                text-xl fixed top-4 left-4 rounded-full opacity-50
                aspect-square w-10 transition-base  flex bg-card_bg
                hover:brightness-75 hover:opacity-80
            " 
            onClick={ onToggleSidebar }
        >
            <i className="m-auto fa-solid fa-bars"/>
        </button>
    )
}