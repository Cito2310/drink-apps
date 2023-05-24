import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { productSlice, modalSlice, sidebarSlice } from "./";

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