import { createSlice } from '@reduxjs/toolkit';

interface sidebarState {
    isOpen: boolean,
}

const initialState: sidebarState = {
    isOpen: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {

        toggleSidebar: ( state ) => {
            state.isOpen = !state.isOpen
        }

    }
});

export const { toggleSidebar } = sidebarSlice.actions;