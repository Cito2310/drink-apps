import "./btn-toggle-sidebar.scss"
import { useAppDispatch } from '../store';
import { toggleSidebar } from "../store/sidebar";

export const BtnToggleSidebar = () => {
    const dispatch = useAppDispatch()
    const onToggleSidebar = () => { dispatch( toggleSidebar() ) }

    return (
        <button id='btn-toggle-sidebar' onClick={ onToggleSidebar }>
            <i className="fa-solid fa-bars"/>
        </button>
    )
}