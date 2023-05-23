import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

type CurrentModal = "create" | "delete" | "update"

interface ModalState {
    current: null | CurrentModal,
    selectedProduct: null | Product
}

const initialState: ModalState = {
    current: null,
    selectedProduct: null
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        setCurrent: ( state, action: { payload: { current: CurrentModal, product?: Product } } ) => {
            state.current = action.payload.current;
            state.selectedProduct = action.payload.product || null;
        },

        closeModal: ( state ) => {
            state.current = null;
            state.selectedProduct = null;
        }

    }
});

export const { setCurrent, closeModal } = modalSlice.actions;