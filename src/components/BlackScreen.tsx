import { useEffect } from 'react';

import "../styles/black-screen.scss"

export const BlackScreen = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return (() => {document.body.style.overflow = "visible"})
    }, [])

    return ( <div id="black-screen"/> )
}