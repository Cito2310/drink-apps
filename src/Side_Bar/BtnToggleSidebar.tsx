import { useContext } from 'react';
import { contextSideBar } from './ProviderSideBarController';

import "./btn-toggle-sidebar.scss"

export const BtnToggleSidebar = () => {
    const {toggleSidebar} = useContext(contextSideBar)

    return (
        <button id='btn-toggle-sidebar' onClick={toggleSidebar}><i className="fa-solid fa-bars"></i></button>
    )
}