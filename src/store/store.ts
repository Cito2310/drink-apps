import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { productSlice } from "./product/productSlice";
import { modalSlice } from "./modal/modalSlice";
import { sidebarSlice } from "./sidebar/sidebarSlice";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        modal: modalSlice.reducer,
        sidebar: sidebarSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;