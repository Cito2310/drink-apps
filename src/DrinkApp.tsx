import { Routes, Route, Navigate } from "react-router-dom"

import "./styles/config.scss"
import "./styles/background-pattern-drink.scss"
import { CardProductPage } from "./Card_Product_Page/CardProductPage"
import { ListSelectPage } from './List_Select_Page/ListSelectPage';

export const DrinkApp = () => {
    return (
        <>
            <div id="background-pattern-drink"></div>
            <Routes>
                <Route path="/" element={<CardProductPage/>}/>
                <Route path="/select" element={<ListSelectPage/>}/>

                <Route path="/*" element={<Navigate to={"/"}/>} />
            </Routes>
        </>
    )
}