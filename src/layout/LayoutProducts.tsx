import { BtnToggleSidebar } from '../Side_Bar/BtnToggleSidebar';
import { SideBar } from '../Side_Bar/SideBar';
interface props {
    children: JSX.Element
}

export const LayoutProducts = ({ children }: props) => {
    return (
        <>
            { children }
            <BtnToggleSidebar/>
            <SideBar/>
        </>
    )
}