import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { contextSideBar } from './ProviderSideBarController';

import "./side-bar.scss"
import "./btn-nav-link.scss"

export const SideBar = () => {
    const { sidebarOpen, toggleSidebar } = useContext(contextSideBar)
    console.log(window.location.pathname === "/select")
    console.log(window.location.pathname === "/")

    return (
        <div className={sidebarOpen ? "sidebar open left" : "sidebar left"}> {/* PARA CAMBIAR EL LADO DONDE SE DESPLEGARA LA BARRA LATERAL CAMBIAR right | left */}
            {/* MODIFICAR DESDE AQUI */}
            <div className='sidebar-section-top'>
                <h2>Drink App</h2>
                <i onClick={toggleSidebar} className="fa-solid fa-xmark"></i> {/* ESTE ELEMENTO ES REQUERIDO - NO BORRAR */}
            </div>

            <div className='sidebar-section-container'>
                <NavLink className={window.location.pathname === "/" ? "btn-navlink-sidebar selected" : "btn-navlink-sidebar" } to="/">Todos los productos</NavLink>
                <NavLink className={window.location.pathname === "/select" ? "btn-navlink-sidebar selected" : "btn-navlink-sidebar" } to="/select">Solo productos seleccionados</NavLink>
            </div>
            {/* MODIFICAR HASTA AQUI */}
        </div>
    )
}
