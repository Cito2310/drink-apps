import { Navigate, Route, Routes } from "react-router-dom"
import { ListPage, CardPage } from "../page"
import { Product } from "../types"
import { LayoutProducts } from "../layout"

interface props {
    data: Product[]
}

export const RoutesProducts = ({ data }: props) => {
    return (
            <Routes>

                <Route path='/' element={ 
                    <LayoutProducts>
                        <CardPage products={ data } /> 
                    </LayoutProducts>
                }/>


                <Route path='/onlySelect' element={ 
                    <LayoutProducts>
                        <ListPage products={ data } />
                    </LayoutProducts>
                }/>


                <Route path='/*' element={ <Navigate to={"/"}/> } />
            </Routes>
    )
}