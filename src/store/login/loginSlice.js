import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'LOGIN',
    initialState: {
        // El status para saber si esta o no autenticada
        status: 'checking',
        user: {},
        errorMessage: undefined
    },
    reducers:{

    }
})

export const {} = loginSlice.actions