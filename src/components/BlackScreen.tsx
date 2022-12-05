import "../styles/black-screen.scss"
import { useEffect } from 'react';

export const BlackScreen = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
    
        return () => {
            document.body.style.overflow = "none"
        }
    }, [])
    

    return <div id="black-screen"/>
}