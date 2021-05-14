import {createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name:"modal",
    initialState:{
        state:false
    },
    reducers:{
        openModal:(state)=>{
            return {...state,state:true}
        },
        closeModal:(state)=>{
            return {...state,state:false}
        }
    }

    
})
export const modalState = (state) => state.modal.state;
export const { openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer