import { createSlice } from '@reduxjs/toolkit';
import { getOrderProduct } from '../../helpers';
import { Product } from '../../types';

interface ProductState {
    data: Product[];
    status: {
        isLoading: boolean;
        isError: boolean;
    }
}

const initialState: ProductState = {
    data: [],
    status: {
        isError: false,
        isLoading: false
    }
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: ( state, action ) => {
            state.data = action.payload;
            state.data = getOrderProduct( state.data );
        },

        createProduct: ( state, action ) => {
            state.data.push( action.payload );
            state.data = getOrderProduct( state.data );
        },

        deleteProduct: ( state, action ) => {
            state.data = state.data.filter( product => product._id !== action.payload._id )
        },

        updateProduct: ( state, action ) => {
            state.data = state.data.map( product => {
                if ( product._id === action.payload._id ) return action.payload;
                return product;
            });
            state.data = getOrderProduct( state.data );
        },

        initLoading: ( state ) => { state.status.isLoading = true },
        stopLoading: ( state ) => { state.status.isLoading = false },
    }
});

export const {
    createProduct,
    deleteProduct,
    initLoading, 
    setProducts,
    stopLoading, 
    updateProduct,
} = productSlice.actions;