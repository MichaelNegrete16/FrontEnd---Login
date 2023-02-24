import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'LOGIN',
    initialState: {
        // El status para saber si esta o no autenticada || checking
        status: 'not-authenticated',
        user: {},
        errorMessage: undefined
    },
    reducers:{
        onChecking: state => {
            state.status = 'checking'
            state.user = {}
            state.errorMessage = undefined
        },
        onLogin: (state,{payload}) => {
            state.status = 'authenticated'
            state.user = payload
            state.errorMessage = undefined
        },
        onLogout: (state,{payload}) => {
            state.status = 'not-authenticated'
            state.user = {}
            state.errorMessage = payload
        },
        onClearError: state => {
            state.errorMessage = undefined
        }
    }
})

export const {onChecking,onLogin,onLogout,onClearError} = loginSlice.actions