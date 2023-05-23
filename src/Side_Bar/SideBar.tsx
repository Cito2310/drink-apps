import { NavLink } from 'react-router-dom';

import "./side-bar.scss"
import "./btn-nav-link.scss"
import { useAppDispatch, useAppSelector } from '../store';
import { toggleSidebar } from '../store/sidebar';

export const SideBar = () => {
    const dispatch = useAppDispatch()
    const onToggleSidebar = () => { dispatch( toggleSidebar() ) }
    const { isOpen } = useAppSelector( state => state.sidebar )

    return (
        <div className={ isOpen ? "sidebar open left" : "sidebar left" }> {/* PARA CAMBIAR EL LADO DONDE SE DESPLEGARA LA BARRA LATERAL CAMBIAR right | left */}
            {/* MODIFICAR DESDE AQUI */}
            <div className='sidebar-section-top'>
                <h2>Drink App</h2>
                <i onClick={ onToggleSidebar } className="fa-solid fa-xmark"></i> {/* ESTE ELEMENTO ES REQUERIDO - NO BORRAR */}
            </div>

            <div className='sidebar-section-container'>
                <NavLink className={window.location.pathname === "/" ? "btn-navlink-sidebar selected" : "btn-navlink-sidebar" } to="/">Todos los productos</NavLink>
                <NavLink className={window.location.pathname === "/select" ? "btn-navlink-sidebar selected" : "btn-navlink-sidebar" } to="/select">Solo productos seleccionados</NavLink>
            </div>
            {/* MODIFICAR HASTA AQUI */}
        </div>
    )
}
